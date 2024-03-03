import styled from "styled-components";
import {ContentBox} from "../../../../../../components/ContentBox/ContentBox.jsx";

const FlexContainer = styled.div`
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: column;
`;
const FlexRow = styled.div`
    //border: 1px solid red;
    display: flex;
`;
const FlexItem = styled.div`
    border: 1px solid #d9d7d7;
    padding: 1rem 5rem;
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

import styles from "./NoticeTable.module.css";

export default function NoticeTable() {
    const flex3 = {
        flex: '3'
    }
    const textAlignLeft = {
        textAlign: 'left'
    }
    return (
        <ContentBox>
            <div className={styles.heading}>
                <h1>금지/유의 업종 지정</h1>
                <p>금지/유의 업종</p>
            </div>
            <FlexContainer>
                <FlexRow>
                    <FlexItem>구분</FlexItem>
                    <FlexItem
                        style={{...textAlignLeft}}
                    >항목</FlexItem>
                </FlexRow>
                <FlexRow>
                    <FlexItem>기준 미달</FlexItem>
                    <FlexItem
                        style={{...flex3, ...textAlignLeft}}
                    >
                        <div>- 결제금액 임의입력 또는 변경</div>
                        <div>- 고객센터 번호가 휴대폰인 경우 (의류, 잡화 업종은 가능)</div>
                        <div>- TEST URL(데모사이트)</div>
                        <div>- 모바일앱 (앱스토어 미등록 시)</div>
                        <div>- 결제금액 임의 입력 및 변경</div>
                    </FlexItem>
                </FlexRow>

                <FlexRow>
                    <FlexItem>도박, 경매</FlexItem>
                    <FlexItem
                        style={{...flex3, ...textAlignLeft}}
                    >
                        <div>- 경마, 경륜</div>
                        <div>- 경품 입찰 대행, 인터넷 경매</div>
                        <div>- 도박, 랜덤박스 (도박성)</div>
                    </FlexItem>
                </FlexRow>
                <FlexRow>
                    <FlexItem>환금성</FlexItem>
                    <FlexItem
                        style={{...flex3, ...textAlignLeft}}
                    >
                        <div>- 상품권</div>
                        <div>- 모바일 쿠폰, 기프티</div>
                    </FlexItem>
                </FlexRow>
                <FlexRow>
                    <FlexItem>게임</FlexItem>
                    <FlexItem
                        style={{...flex3, ...textAlignLeft}}
                    >
                        <div>- 게임, 아이템, 아바타</div>
                        <div>- 캐쉬, SMS 충전, 5만원 초과 사이버(게임)머니</div>
                    </FlexItem>
                </FlexRow>
                <FlexRow>
                    <FlexItem>선불카드</FlexItem>
                    <FlexItem
                        style={{...flex3, ...textAlignLeft}}
                    >
                        <div>- 국제전화 카드, USIM 카드</div>
                        <div>- 적립, 할인카드</div>
                    </FlexItem>
                </FlexRow>
                <FlexRow>
                    <FlexItem>미성년자 이용 금지 품목</FlexItem>
                    <FlexItem
                        style={{...flex3, ...textAlignLeft}}
                    >
                        <div>- 주류 (전통주 제외)</div>
                        <div>- 담배 (연초/전자), 마약류)</div>
                        <div>- 금연 보조제</div>
                        <div>- 복권</div>
                        <div>- 모의 총포</div>
                        <div>- 음란물, 성인용품 (콘돔, 페로몬향수, 젤 제외)</div>
                        <div>- 성인 유료 서비스 제공(음란 컨텐츠), 성인 속옷</div>
                        <div>- 유흥업소, 유흥 구직 구인</div>
                        <div>- 성인사이트/청소년 유해 사이트, 만남 주선업, 채팅, 폰팅</div>
                    </FlexItem>
                </FlexRow>
                <FlexRow>
                    <FlexItem>다단계</FlexItem>
                    <FlexItem
                        style={{...flex3, ...textAlignLeft}}
                    >
                        <div>- 보험 및 다단계</div>
                    </FlexItem>
                </FlexRow>
                <FlexRow>
                    <FlexItem>건강식품</FlexItem>
                    <FlexItem
                        style={{...flex3, ...textAlignLeft}}
                    >
                        <div>- 고가 다이어트/성 기능, 허벌라이프, 방문판매</div>
                    </FlexItem>
                </FlexRow>
                <FlexRow>
                    <FlexItem>고가 상품</FlexItem>
                    <FlexItem
                        style={{...flex3, ...textAlignLeft}}
                    >
                        <div>- 500만원 이상 상품</div>
                        <div>- 고가 가구/가전/악기</div>
                        <div>- 500만원 이상 상품</div>
                        <div>- 500만원 이상 상품</div>
                        <div>- 500만원 이상 상품</div>
                    </FlexItem>
                </FlexRow>
                <FlexRow>
                    <FlexItem>차량용품</FlexItem>
                    <FlexItem
                        style={{...flex3, ...textAlignLeft}}
                    >
                        <div>- 자동차, 중고차 판매</div>
                        <div>- 이륜차(오토바이) 판매 및 수리</div>
                        <div>- 자동차 용품(차량정비)</div>
                        <div>- 네비게이션/블랙박스 (종합차량용품 상점을 일부 가능)</div>
                    </FlexItem>
                </FlexRow>
                <FlexRow>
                    <FlexItem>의약품</FlexItem>
                    <FlexItem
                        style={{...flex3, ...textAlignLeft}}
                    >
                        <div>도수 있는 안경, 선글라스, 콘택트렌즈</div>
                    </FlexItem>
                </FlexRow>
                <FlexRow>
                    <FlexItem>저작권 침해 물품</FlexItem>
                    <FlexItem
                        style={{...flex3, ...textAlignLeft}}
                    >
                        <div>명품 가품</div>
                    </FlexItem>
                </FlexRow>
                <FlexRow>
                    <FlexItem>가상 자산</FlexItem>
                    <FlexItem
                        style={{...flex3, ...textAlignLeft}}
                    >
                        <div>가상 자산 관련 취급업</div>
                    </FlexItem>
                </FlexRow>
            </FlexContainer>
        </ContentBox>
    )
}