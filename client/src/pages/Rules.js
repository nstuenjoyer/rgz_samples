import React from "react";
import { Col, Container } from "react-bootstrap";
import './Rule.css';
const Rules = () => {
    return (
        <Container className="pb-4 pt-4">
            <Col md={11}>
                <div class="text-box" style={{ color: "black" }}>
                    <p>
                    </p>




                    <h2 className="asd">Cуперкраткий шаблон оформления отчетов по учебной работе:
                        <a href='http://localhost:5000/download.docx'>Cкачать</a>.
                    </h2>

                    <h2 id="2">Основные требования к написанию курсовой работы</h2>

                    <p>Перед тем как рассказать об общих правилах оформления, хочется заострить внимание, что несмотря на то, что они идут из ГОСТа, в каждом вузе имеется свой список требований к составлению студенческих работ, и эти правила могут отличаться. Чтобы не допустить
                        ошибок, проконсультируйтесь с Вашим научным руководителем или сотрудником кафедры. Идеальным вариантом будет найти методические указания Вашего вуза, чтобы в дальнейшем работать по ним!</p>

                    <ol>
                        <li>Начнем, конечно же, с <strong>шрифта</strong>: классический Times New Roman с размером 14.</li>
                        <li>Полуторный <strong>межстрочный интервал</strong> обязателен, а каждый абзац начинается с отступа в 1.25 см.</li>
                        <li><strong>Выравнивание текста</strong> «по ширине».</li>
                        <li><strong>Поля</strong> тоже традиционные: левый отступ – 3 см, правый отступ 1.5 см, верхний и нижний – 2 см.</li>
                        <li><strong>Нумерация</strong> начинается с титульного листа, но проставляется лишь с первой страницы введения.</li>
                    </ol>


                    <h2 id="3">Из чего состоит курсовая работа</h2>

                    <p>Курсовая работа делится на 6 обязательных частей и одну необязательную:</p>

                    <ul >
                        <li>титульный лист;</li>
                        <li>содержание;</li>
                        <li>введение;</li>
                        <li>основная часть;</li>
                        <li>заключение;</li>
                        <li>список источников (литературы);</li>
                        <li>приложения (при наличии).</li>
                    </ul>

                    <h3 id="31">Оформление титульного листа</h3>


                    <ul >
                        <li>министерство науки и образования;</li>
                        <li>название вуза;</li>
                        <li>название кафедры;</li>
                        <li>название темы курсовой и дисциплины, по которой она пишется;</li>
                        <li>ФИО и группа студента;</li>
                        <li>ФИО и должность преподавателя;</li>
                        <li>город и год написания работы.</li>
                    </ul>
                    <img src="http://localhost:5000/titlePage.png" alt="пример титульного листа курсовой" width="100%" />


                    <p>Для удобства пользователей Microsoft Word предлагает удобнейшую функцию «<strong>Автооглавление</strong>», с которой отлично оформляется содержание.</p>

                    <p>При написании заголовков, чтобы не нарушить требования ГОСТ, в конце не ставится точка, а разрыв между названием главы до текста, также полуторный, как и для всей остальной работы.</p>
                    <img src="http://localhost:5000/contents.png" alt="пример оформления содержания курсовой" width="100%" />

                    <h3 id="33">Оформление списка источников (литературы)</h3>
                    <p> Сразу хочется напомнить, что все источники, должны, так или иначе, упоминаться в тексте с помощью ссылок. Для этого, после фрагмента с текстом из источника, ставятся квадратные скобки и в них указывается номер источника в списке литературы и страница.
                    </p>

                    <blockquote class="quote">Пример: «…» [4, c.22]. Это будет значить, что цитата взята из книги, находящейся под четвертым номером в списке литературы, с 22 страницы.</blockquote>

                    <p>Самая трудоемкая и проблемная часть курсовой работы – подбор и оформление списка литературы. Профессионал своего дела, при проверке Вашей работы, первым делом заглянет в список литературы, проверит её на актуальность и правильность оформления, чтобы избежать
                        провала, дадим Вам несколько советов:</p>

                    <ol >
                        <li>Актуальная литература – все Ваши источники не должны быть старше 2013 года. Исключением могут служить лишь техническая номенклатура.</li>
                        <li>Каждый источник обязательно должен иметь упоминание и ссылку в тексте.</li>
                        <li>Если имеется обновленный вариант закона или правового акта, то использовать необходимо именно его.</li>
                        <li>Если хочется произвести впечатление на руководителя, то минимизируйте использование классических учебных пособий, в приоритет поставьте научные статьи и актуальные исследования.</li>
                    </ol>
                    <img src="http://localhost:5000/bibliography.png" alt="пример оформления списка литературы" width="100%" />
                    <h3 id="34">Оформление формул и уравнений</h3>

                    <p>Небольшой, но важный раздел для студентов технических вузов. Даже понимание формул не дает Вам никаких гарантий правильного их оформления в работе. Чтобы правильно оформить формулы необходимо придерживаться двух основных правил:</p>

                    <ol >
                        <li>Уравнения и формулы выносятся отдельной строкой, ни в коем случае не остаются частью текста. Каждое такой элемент должен иметь свой номер в круглых скобках.</li>
                        <li>Формулы и уравнения выводятся в буквенном виде и лишь затем происходит расшифровка всех индексов.</li>
                    </ol>


                    <h3 id="35">Оформление графических материалов,&nbsp;иллюстраций и картинок</h3>

                    <p>Сразу хочется немного пояснить, что такое графические материалы или иллюстрации.</p>

                    <blockquote class="note">Графические материалы (иллюстрации) – дополнения к текстовой части Вашей работы, состоящие из таблиц, схем, графиков, чертежей, графических изображений документов (сканов) и рисунков.</blockquote>

                    <p>Каждому графическому объекту присваивается название и номер для удобной навигации. Нумерация, конечно же, сквозная. Для объёмных графических материалов существует раздел «Приложения», в который их рекомендуется поместить. Если объект небольшой и занимает
                        приемлемую часть страницы, то его можно не вносить в приложения, оставив, как дополнение к тексту.</p>

                </div>
            </Col>
        </Container>
    )
}

export default Rules;