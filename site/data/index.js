const vfile = require('to-vfile')
const frontmatter = require('remark-frontmatter')
const glob = require('glob')
const remark = require('remark')
const html = require('remark-html')
const {columnInfos} = require('./config')

function formatYamlRawData (raw) {

  function isKeyValue (data) {
    // 'category: 原则'
    return !/^-/.test(data) && !/^\s/.test(data) && data.split(':').length === 2
  }

  function isSubArrayItem (data) {
    // '  - ar1'
    return /^\s/.test(data) && /^-/.test(data.trim()) && data.trim().split('-').length === 2
  }

  function isSubKeyValue (data) {
    // '  zh-CN: 数据录入'
    return /^\s/.test(data) && /^\S/.test(data.trim()) && data.trim().split(':').length === 2
  }

  function checkValue (val) {
    if (!val) return ''
    val = val.replace(/\"/ig, '')
    val = val.replace(/\'/ig, '')
    return val.trim()
  }

  let rawList = raw.split('\n')
  let res = []
  rawList.forEach(item => {
    if (isKeyValue(item)) {
      let _tmp = item.split(':')
      res.push({
        [_tmp[0].trim()]: checkValue(_tmp[1])
      })
    }

    if (isSubKeyValue(item)) {
      let _tmp = item.trim().split(':')
      let _last = res[res.length - 1]
      let _key = Object.keys(_last)[0]
      if (typeof _last[_key] === 'object') {
        _last[_key][_tmp[0]] = checkValue(_tmp[1])
      } else {
        _last[_key] = {
          [_tmp[0]]: checkValue(_tmp[1])
        }
      }
    }

    if (isSubArrayItem(item)) {
      let _tmp = item.trim().split('-')
      let _last = res[res.length - 1]
      let _key = Object.keys(_last)[0]
      if (Array.isArray(_last[_key])) {
        _last[_key].push(checkValue(_tmp[1]))
      } else {
        _last[_key] = [checkValue(_tmp[1])]
      }
    }
  })

  return parseRawData(res)
}

function parseRawData (data) {
  const res = {}
  data.forEach(item => {
    for (let _key in item) {
      res[_key] = item[_key]
    }
  })
  return res
}

function getColumnInfo (path) {
  return columnInfos.find(columnInfo => path.includes(columnInfo.id))
}

async function parseFile (filePath) {
  let frontmatterRawData = ''
  let defaultColumnInfo = getColumnInfo(filePath)
  return new Promise((resolve, reject) => {
    remark()
    .use(html)
    .use(frontmatter)
    .use(function () {
      return (data) => {
        try {
          const yamlData = data.children.find(item => item.type === 'yaml')
          if (yamlData && yamlData.value) {
            frontmatterRawData = formatYamlRawData(yamlData.value)
          }
        } catch (e) {
          throw new Error('Error in formatYamlRawData func')
          reject(e)
        }
      }
    })
    .process(vfile.readSync(filePath), function (err, file) {
      if (err) {
        reject(err)
        return
      }

      resolve({
        columnInfo: frontmatterRawData.column || defaultColumnInfo,
        filePath: filePath,
        frontmatter: frontmatterRawData,
        contents: file.contents
      })
    })
  })
}

glob('/Users/Hsiang/GitHub/vimo-site/docs/**/*.md', {}, (err, mdFiles) => {
  mdFiles.forEach(fileName => {
    parseFile(fileName).then((data) => {
      console.log(data)
      // console.log(data.frontmatter)
      // console.log(data.columnInfo)
      // console.log(data.frontmatter)
    })
  })
})
