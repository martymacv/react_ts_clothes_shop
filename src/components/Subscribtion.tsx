import Title from "./generals/Title";
import Text from "./generals/Text";
import Span from "./generals/Span";
import SubscribeForm from "./forms/SubscribeForm";

function Subscribtion() {
    // Нужно добавить очистку input и уведомление о результатах подписки
    // Нужно обработать ошибки (которые выдаёт API)
    return (
        <div className="bg-[#cbcbcb33] py-11 ml-[235px] my-[53px] mr-[53px]">
            <Title as="h1" variant="primary">Подписывайся<br/>на наши обновления</Title>
            <Text>Узнай первым о старте<br/>скидок и специальных предложений!</Text>
            <SubscribeForm/>
            <Span>Подписываясь рассылку, вы соглашаетесь<br />с <a href="#">Политикой конфиденциальности</a>.</Span>
        </div>
    )
}

export default Subscribtion
