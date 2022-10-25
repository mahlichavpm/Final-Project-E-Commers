import { Link } from 'react-router-dom';
import './ErrorPage.scss'

export default function ErrorPage() {

  return (
    <div class="mainbox">
      <div class="err">4</div>
      <i class="far fa-question-circle fa-spin"></i>
      <div class="err2">4</div>
      <div class="msg">
        Може би страницата е преместена? Изтрита? Вкъщи под карантина? <br/>
        Или просто никога не създавана?
        <p>
          Да се върнем в <Link to={'/home'}>началото</Link> и да опитаме отново.
        </p>
      </div>
    </div>
  );
}
