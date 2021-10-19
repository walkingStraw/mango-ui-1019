import Mock from 'mockjs'

Mock.mock(
  'http://localhost:8080/hello',
  {'msg':'hello-from-mock'}
)