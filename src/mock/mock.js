import Mock from 'mockjs'

Mock.mock(
  'http://localhost:8080/hello',
  {'msg':'hello-from-mock'}
)
Mock.mock(
  'http://localhost:8080/user',
  {
    'name': '@name',
    'email': '@email',
    'age|1-100': 5
  }
)