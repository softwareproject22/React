import './Detail.css'

//history 눌렀을때 모달로 comment history 불러오는거도 나쁘지 않을듯
function Detail(){

    const handleComment=()=>{

    }

    return(
        <div className='detailview'>
            <span>
                <header>
                    <div className='row'>
                        <div className='highlight'>
                            <div id='num'>#1</div>
                            <div id='status'>status</div>
                        </div>
                        <button>수정</button>
                    </div>
                    <div id='title'>제목</div>
                </header>
                <main>
                    <div className='horizon'>
                        <label for='reporter'>Reporter :</label>
                        <div id='reporter'>리포터</div>

                        <label for='assignee'>Assignee :</label>
                        <div id='assignee'>배정자</div>
                    </div>
                    <div className='horizon'>
                        <label for='priority'>Priority :</label>
                        <div id='priority'>Major</div>

                        <label for='tag'>Tag :</label>
                        <div id='tag'>태그</div>
                    </div>
                    <div className='horizon'>
                        <label for='fixer'>Fixer :</label>
                        <div id='fixer'>픽서</div>

                        <label></label>
                        <div></div>
                    </div><br/>
                </main>
                <footer>
                    <label for='description'>Description :</label>
                    <div id='line'></div>
                    <div id='description'>100자 정도 들어감</div>
                </footer>
            </span>
            <button className='history'>...</button>
            <form onSubmit={handleComment}>
                <input type='text' placeholder='Comment'></input>
                <input type='submit' value="추가"></input>
            </form>
        </div>
    );
}

export default Detail