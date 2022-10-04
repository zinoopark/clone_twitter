import uuid from 'react-uuid'

const dummyData =[
   {
    id: uuid(),
    username: 'Elon Musk',
    picture: `${process.env.PUBLIC_URL}/elon.jpeg`,
    content:
      '블록체인 밸리 리액트 화이팅!!',
    createdAt: '2022-02-24T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Hermann Karl Hesse',
    picture: `https://randomuser.me/api/portraits/men/98.jpg`,
    content:
      '새는 알에서 나오기 위해 투쟁한다. 알은 새의 세계이다. 누구든지 태어나려고 하는 자는 하나의 세계를 파괴하여야 한다. 새는 신을 향해 날아간다. 그 신의 이름은 아브락사스이다. ',
    createdAt: '2021-09-25T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Steve Jobs',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    content:
      '포커스 그룹들에 의해 제품을 설계하는 것은 매우 어려운 일이다. 대부분의 경우 사람들은 제품을 보여주기 전까지 자신이 무엇을 원하는지 모른다.',
    createdAt: '2020-06-11T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Jeffrey Preston Bezos',
    picture: 'https://randomuser.me/api/portraits/men/40.jpg',
    content:
      '호황기에 사람들은 가장 중요한 것에 집중하기 굉장히 어렵다.',
    createdAt: '2020-02-14T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Steve Jobs',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    content:
      '내가 곧 죽을 것이라는 사실은 인생에서 큰 결정을 할 때 도와주는 가장 중요한 도구가 되었습니다. 당신이 언젠가 죽을 것이라는 사실을 기억하는 건 우리가 아직 잃을 게 많다는 착각으로부터 벗어나는 좋은 방법입니다.',
    createdAt: '2021-07-06T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Jeffrey Preston Bezos',
    picture: 'https://randomuser.me/api/portraits/men/40.jpg',
    content:
      '최고의 고객 서비스는 고객이 당신에게 전화할 필요도, 이야기할 필요도 없다. 그냥 작동한다. ',
    createdAt: '2020-01-30T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Elon Musk',
    picture: `${process.env.PUBLIC_URL}/elon.jpeg`,
    content:
      '나는 사실 시간관리와 관련된 책은 아무것도 읽어보지 않았다.',
    createdAt: '2021-06-27T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Jeffrey Preston Bezos',
    picture: 'https://randomuser.me/api/portraits/men/40.jpg',
    content:
      '사람들은 내게 5년 후, 혹은 10년 후 무엇이 변할 것인지는 묻지만 무엇이 변하지 않을지는 묻지 않는다. 세상이 어떻게 변하더라도 고객이 원하는 가치를 제공한다면 고객은 절대 외면하지 않는다.',
    createdAt: '2020-12-08T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Steve Jobs',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    content:
      '나는 항상 혁신적인 변화를 쫓아왔다. 그건 더 어려웠기 때문인지 모른다. 혁신은 감정적으로 굉장히 압박이 심하다. 그리고 모든사람들이 당신에게 완벽히 실패했다고 이야기 하는 시기를 이겨내야 한다.',
    createdAt: '2020-07-30T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Jeffrey Preston Bezos',
    picture: 'https://randomuser.me/api/portraits/men/40.jpg',
    content:
      '예전에는 멋진 서비스를 만들기 위해 30%의 시간을 투자하고, 알리기 위해 70%를 사용했다면, 새로운 시대에는 그 반대다. ',
    createdAt: '2020-02-26T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Steve Jobs',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    content:
      '나는 우리가 이루지 않은 것들도 우리가 성공한 것들 만큼이나 자랑스럽다. 혁신은 천가지에 대해 "NO"를 외치는 것이기 때문이다.',
    createdAt: '2020-06-06T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Jeffrey Preston Bezos',
    picture: 'https://randomuser.me/api/portraits/men/40.jpg',
    content:
      '비판받는 것을 두려워한다면, 그냥 아무것도 하지 않으면 된다.',
    createdAt: '2020-01-17T16:17:47.000Z',
    marked: false
  },
  {
    id: uuid(),
    username: 'Steve Jobs',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    content:
      '내 사업의 비지니스 모델은 "비틀스"이다. 그들 네명은 서로의 부정적인 성향을 통제했다. 그들은 서로 균형을 잡았고, 함께 조화를 이루었을 때 각각의 능력을 합한 것보다 더 훌륭했다.',
    createdAt: '2020-03-10T16:17:47.000Z',
    marked: false
  }, 
  {
    id: uuid(),
    username: 'Jeffrey Preston Bezos',
    picture: 'https://randomuser.me/api/portraits/men/40.jpg',
    content:
      '당신 회사의 이익률은 우리 회사의 기회이다.',
    createdAt: '2020-03-01T16:17:47.000Z',
    marked: false
  },
]

export default dummyData;