
const titleContainer = document.querySelector(".title-container");
const titleBtn = document.querySelector("#startBtn");
const questionContainer = document.querySelector('.question-container');
const question = document.querySelector('#question');
const type = document.querySelector('#type');
const aBtn = document.querySelector("#a");
const bBtn = document.querySelector('#b');
const EI = document.querySelector('#EI');
const SN = document.querySelector('#SN');
const TF = document.querySelector("#TF");
const JP = document.querySelector("#JP");
const pro = document.querySelector('.progress-bar');
const MBTI = document.querySelector('#mbti');
const explain = document.querySelector('#explain');
const image = document.querySelector('#result-img');
const resultContainer = document.querySelector('.result-container'); 
const url = 'https://twelvelovetype.netlify.app/';


const q = {
    1: { "title": "과제가 나왔다면?", "type": "JP",  "A": "나왔으니깐 후딱하고 끝내야겠다.","B": "어차피 시간도 많이 남았는데 나중에 하지 뭐,,"},
    2: {"title": "다음날 내 머리에서 해바라기가 자라 있다면?","type": "SN", "A": "엥 이게 무슨 소리야?", "B": "음,,나는 기를것 같아"},
    3: {"title": "에스컬레이터를 탈때 나는?", "type": "SN", "A": "그냥 타고 올라감", "B": "만약 이 에스컬레이터가 무너진다면?어떡하지 상상을 함"},
    4: {"title": "친구가 나한테 나 시험 망쳤어,,라고 한다면?", "type": "TF", "A": "그러게 왜 벼락치기를 했어", "B": "괜찮아~다음이 있잖아!!"},
    5: {"title": "사람들과 모이는 자리에서 나는?", "type": "EI", "A": "먼저 말 꺼냄", "B": "가만히 듣고 있음"},
    6: {"title": "인터넷에서 쇼핑을 한다면?", "type": "JP", "A": "리뷰를 다 읽어보고 판단해야 겠다", "B": "흠 대충 봤을때 괜찮은거 같으니 사야지"},
    7: {"title": "친해지려고 하는 사람이 카톡을 안 본다", "type": "TF", "A": "바쁘나 보네", "B": "왜 안 보지,,내가 실수한게 있나?"},
    8: {"title": "공휴일에 나는?", "type": "EI", "A": "오예~친구들이랑 놀러 가야지", "B": "드디어 공휴일,,집에 쉬어야지,,"},
    9: {"title": "친구가 놀기로 하였는데 급한 사정으로 인해 못 나온다고 했다. 이때 나는?", "type": "TF", "A": "아 못 나오구나,,우리끼리 놀자", "B": "알겠다고는 했지만 엥 무슨 일이지?라는 생각을 함"},
    10: {"title": "에너지를 얻을때 나는?", "type": "EI", "A": "밖에서 얻는다","B": "집에서 얻는다"},
    11: {"title": "무인도에 하나만 가져갈 수 있다면??", "type": "SN", "A": "물을 가져 간다", "B": "모나리자 작품을 훔쳐간다"},
    12: {"title": "친구가 나를 피한다 나의 반응은?", "type": "TF", "A": "나도 너 싫어~","B": "내 성격에 문제가 있나..?"}
}
const result = {
    "ISTJ": {"animal": "하마", "explain": "주변 환경이 변화하는 것에 대해 두려워 함 겉보기엔 차가워 보이지만 가까이 지내는 사람들에겐 장난꾸러기 야곳시간에 늦지 않기 위해 예기치 못할 상황까지 고려하는 편"},
    "ISFJ": { "animal": "하마", "explain": "타인에 대한 책임감이 있으며 동정심이 많음 남에게 의존하는 경향이 있음 마음이 따뜻하나 상대방을 잘 알기 전에는 표현을 잘하지 않는 조용함"},
    "INFJ": { "animal": "하마", "explain":"생각이 많고 새로운 일을 시작하거나 새로운 사람을 만나는 것을 두려워 함 감수성이 풍부해서 혼자서 생각 정리할 시간이 꼭 필요함 할 일을 미리 다 함 계획적인 것을 좋아함"},
    "INTJ": { "animal": "하마", "explain":"혼자 있는 거 좋아하는데 단체 활동할 때 주도적인 역할 자주 맡음 하루하루 세세하게 계획 짜 놓고 지내는 거 좋아함 돈 관리 잘하고 원리원칙을 중요시 여김 수다 떠는 거 좋아함 할 땐 하는데 안 할 땐 안함"},
    "ISTP": { "animal": "하마", "explain":"요점만 듣고 요점만 얘기하고 싶음 '그런가보다'마인드로 살아감 드라마 끝까지 보는거 잘 못함 위계질서 싫어하고 내 일에 간섭하면 짜증남 남한테 관심 없고 내 얘기도 잘 안함 "},
    "ISFP": { "animal": "하마", "explain":"새로운 관계 만드는 거 귀찮아하고 인생좌우명이 뭐든 적당히임 집에 가면 연락두절됨 배려형 개인주의 갈등,불화 싫어함 모든 일을 미룰 수 있을때까지 다 미룸"},
    "INFP": { "animal": "배려왕 아기사자", "explain": "감수성이 풍부하고 남이 나를 어떻게 생각할지 고민하고 눈치 봄 자주 우울해하고 무언가 할 때 집중하고 신중해서 시간이 오래걸림 개인한테 인싸, 집단한테 아싸"},
    "INTP": { "animal": "하마", "explain":"자발적 아웃사이더이고 낯가림 시끄러운 거 싫어하고 감정기복이 별로 없음 뭐 하나 시작하면 끝을 봐야함 친구들이랑 얘기할 때 가벼운 얘기하는 거 싫어함 진지하다는 소리를 자주 들음"},
    "ESTP": { "animal": "하마", "explain":"남한테 관심 없고 생각하는것도 귀찮음 모임에서 어느새 내가 분위기 주도하고 있음 밖에서 사람 만나는거 좋아하는데 게을러서 나가기까지가 싫음 공감 능력이 조금 부족"},
    "ESFP": { "animal": "하마", "explain":"고집이 세고 우주최강오지랖임 자존감이 높고 모임장소에 침묵 흐르는 것을 싫어함 어울리는 것은 좋아하는데 밖에 나가는 것은 귀찮아함 성격이 급함 사교성이 좋아서 모든 사람들과 잘 지냄"},
    "ENFP": { "animal": "깨발랄 아기사자", "explain": "꽂히는 일 꼭 해야하고 긍정적이고 낙천적인 인싸 순간 집중력이 좋아서 벼락치기해도 성적 잘 나옴 관종 같아보이지만 은근히 내향적이고 독립적임 내 얘기 하는거 좋아함"},
    "ENTP": {"animal": "하마", "explain":"똑똑한 사람 좋아함 타인에게 관심 없음 본인이 엔팁(ENTP)인 것을 좋아함 지인 놀리는 것을 좋아함 자존감 높음 지인들에게 들이대는 것을 좋아함 반박 잘하고 말싸움 좋아함 호불호가 명확함"},
    "ESTJ": { "animal": "하마", "explain":"리더 맡는거 싫어하는데 막상하면 잘함 호불호가 확실 외로움을 별로 안탐 사람들이 아는 내 성격이랑 혼자 있을 때랑 조금 다름 뭐든 확실한 게 좋음 누가 일 못하는 거 못 보고 차라리 그럴바에 내가 두세배로 일 다 해놓음 목표 설정해놓고 그 목표 이룰때까지 한 우물만 팜"},
    "ESFJ": { "animal": "하마", "explain":"생각보다 철저하고 혼자 계획 세우고 그 계획 틀어지는 거 싫어함 남 눈치 많이 봄 상담, 고민 들어주는 거 잘함 어디 나가면 어색한거 못참고 먼저 말 검 인간관계에서 상처받아도 그 사람 배려한다고 얘기 못함"},
    "ENFJ": {"animal": "하마", "explain":"인싸되고 싶어함 센스있고 눈치 빠름 단순하지만 멘탈은 강함 계획짜는거 좋아하고 조금이라도 벗어나면 화남 남들 신경쓰고 잘해주려하는데 그 만큼 상처도 많이 받음 무리에 속해있는 것도 좋아하지만 마이웨이 기질이 약간 있음"},
    "ENTJ": {"animal": "하마", "explain": "호기심이 많아서 직접 다 먹어보고 다 해봐야 직성이 풀림 정이 엄청 많음(가끔 너무 많아서 문제임) 갈등을 싫어하는 평화주의자 과거,추억 되새기는거 좋아해서 소중한 추억들 절대 못 잊음"}
}

let num = 1;
let mbti = '';

// 여기까지만 사전 제공

titleBtn.addEventListener('click', ()=>{
    titleContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    updateQuestion();
});

aBtn.addEventListener('click', ()=>{
    // eslint-disable-next-line default-case
    switch(type.innerHTML) {
        case 'EI' :
            let e = parseInt(EI.value);
            EI.setAttribute('value', e+1);
            break;
        case 'SN':
            let s = parseInt(SN.value);
            SN.setAttribute('value', s+1);
            break;
        case 'TF':
            let t = parseInt(TF.value);
            TF.setAttribute('value', t+1);
            break;
        case 'JP':
            let j = parseInt(JP.value);
            JP.setAttribute('value', j+1);
            break;
    }
    updateQuestion();
});

bBtn.addEventListener('click', ()=>{
    updateQuestion();
});

function updateQuestion(){
    if(num === 13){
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';

        (EI.value > 2 ? mbti+='E' : mbti+='I');
        (SN.value > 2 ? mbti+='S' : mbti+='N');
        (TF.value > 2 ? mbti+='T' : mbti+='F');
        (JP.value >= 2 ? mbti+='J' : mbti+='P');

        MBTI.innerHTML = mbti;
        explain.innerHTML = result[mbti].explain;
        image.setAttribute('src', result[mbti].img);
    }
    else{
        pro.setAttribute('style', `width : calc(100/12*${num}%);`);
        question.innerHTML = q[num].title;
        type.innerHTML = q[num].type;
        aBtn.innerHTML = q[num].A;
        bBtn.innerHTML = q[num].B;
        num++;
    }
}
function goNext(qIdx){
 var status=dociment.querySelector('.statuBar');
 status.style.width=(100/endPoint)*(qIdx+1)+'%';
}
let qIdx = 0;
goNext(qIdx);


function setShare(){
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '십이간지 연애유형 결과';
    const shareDes = infoList[resultAlt].name;
    const shareImage = url + 'img/image-' + resultAlt + '.png';
    const shareURL = url + 'page/result-' + resultAlt + '.html';
  
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImage,
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL
        },
      },
  
      buttons: [
        {
          title: '결과확인하기',
          link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
          },
        },
      ]
    });
  }
