import React from 'react';
import { 
    NotebookContainer, 
    NotebookWrapper, 
    NotebookContent, 
    NotebookTextWrap, 
    NotebookH2, 
    NotebookP, 
    NotebookImgWrap, 
    NotebookImgBg, 
    NotebookImg,
    NoticeContent,
    NoticeImgWrap,
    NoticeImgBg,
    NoticeTextWrap,
    NoticeP,
    NoticeCard,
    CardIcon,
    CardIconWrap,
    CardText,
} from './NotebookElements';

const Notebook = () => {
    return (
        <>
            <NotebookContainer>
                <NotebookWrapper>
                    <NotebookContent>
                        <NotebookTextWrap>
                            <NotebookH2>Temporibus autem quibusdam et aut officiis debitis</NotebookH2>
                            <NotebookP>At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est.</NotebookP>
                        </NotebookTextWrap>
                        <NotebookImgWrap>
                            <NotebookImgBg src={require('../../../images/bg-notebook.svg').default}/>
                            <NotebookImg src={require('../../../images/notebook.svg').default}/>
                        </NotebookImgWrap>
                    </NotebookContent>

                    <NoticeContent>
                        <NoticeImgWrap>
                            <NoticeImgBg src={require('../../../images/notice-bg.svg').default}/>
                            <NoticeCard>
                                <CardIconWrap>
                                    <CardIcon src={require('../../../images/notice-icon.svg').default}/>
                                </CardIconWrap>
                                <CardText>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</CardText>
                            </NoticeCard>
                        </NoticeImgWrap>
                        <NoticeTextWrap>
                            <NoticeP>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.</NoticeP>
                        </NoticeTextWrap>
                    </NoticeContent>

                </NotebookWrapper>
            </NotebookContainer>
        </>
    )
}

export default Notebook;
