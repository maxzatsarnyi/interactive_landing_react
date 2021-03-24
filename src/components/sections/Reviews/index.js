import React, {useState, useEffect} from 'react';
import { 
    ItemStarsWrap, 
    ItemUser, 
    ItemUserWrap, 
    ReviewsContainer, 
    ReviewsSection,
    ReviewItem,
    ReviewsP,
    ReviewsH2,
    Icon,
    ItemUserId,
    ItemText,
    ItemTitleWrap,
    ReviewsList,
    ReviewItemWrap,
    ItemUserCateg,
    ReviewsBtnMore,
 } from './ReviewsElements';
import Pagination from '../../shared/Pagination/index'
import data from './Data';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
const responsive = {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1180: {
      items: 3
    }
  };
const Reviews = () => {
    const [reviews, setReviews] = useState(data);
    const [currentReviews, setCurrentReviews] = useState();

    const [page, setPage] = useState(1);
    const [revPerPage, setRevPerPage] = useState(3);

    const setCurrentRev = () => {
        let indexOfLastPost = page * revPerPage; // 1 * 3 = 3
        let indexOfFirstPost = indexOfLastPost - revPerPage; // 3 - 3 = 0
        let currentPosts = reviews.slice(indexOfFirstPost, indexOfLastPost); // from 0 to 3 = [0,1,2]
        setCurrentReviews(currentPosts);
    }

    const changePage = page => setPage(page);

    const loadMore = () => {
        setRevPerPage(prevState => prevState + 3)
    }

    useEffect(() => {
        setCurrentRev();

    }, [page, revPerPage])

    return (
        <>
            <ReviewsSection>
                <ReviewsContainer>
                    <ReviewsH2>Reviews</ReviewsH2>
                    <ReviewsP>Nam libero tempore, cum soluta nobis est </ReviewsP>

                    <ReviewsList isMore={currentReviews && currentReviews.length > 3 || page > 1? true : false}>
                        {currentReviews && currentReviews.map(({id, id_user, text}) => (
                                <ReviewItem key={id}>
                                    <ReviewItemWrap>
                                        <ItemTitleWrap>
                                            <Icon src={require('../../../images/reviews-quats.svg').default}/>
                                            <ItemStarsWrap><span style={{margin: '2px 10px 0 0'}}>5.0</span>
                                                <Icon src={require('../../../images/reviews-stars.svg').default}/>
                                            </ItemStarsWrap>
                                        </ItemTitleWrap>
                                        <ItemText>{text}</ItemText>
                                        <ItemUserWrap>
                                            <ItemUser>
                                                <Icon src={require('../../../images/reviews-user.svg').default}/>
                                                <ItemUserId>ID: {id_user}</ItemUserId>
                                            </ItemUser>
                                            <ItemUserCateg>Category|Subcategory</ItemUserCateg>
                                        </ItemUserWrap>
                                    </ReviewItemWrap>
                                </ReviewItem>
                            ))}
                    </ReviewsList>

                    <ReviewsBtnMore onClick={loadMore}>Read more</ReviewsBtnMore>

                    <Pagination 
                        page={page} 
                        revPerPage={revPerPage}
                        totalPosts={reviews.length}
                        changePage={changePage}
                    />
                </ReviewsContainer>
            </ReviewsSection>
        </>
    )
}

export default Reviews;
