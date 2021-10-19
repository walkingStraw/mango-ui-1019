export function bookName() {
  const bookData = {
    "code": 200,
    "msg": null,
    "data": {
      'name': '水浒传'
    }
  }
  return {
    url: 'book',
    type: 'get',
    data: bookData,
    // isOpen: false
  }
}