import React, {useState} from 'react';
import Select from '../../shared/Select/index';
import NumSelect from '../../shared/NumSelect/index';
import CalendarSelector from '../../shared/CalendarSelector/index';

import {
    Calculator, 
    CalculatorContainer,
    CalculatorH2,
    CalculatorP,
    CalculatorWrapper,
    CalculatorSelectors,
    CalculatorResults,
    ResultsBtn,
    ResultsWrap,
    SelectorWrapper,
    SelectorWrapper2,
} from './CalculatorElements';
import styled from 'styled-components';

const colorsOptions = [
    {
        value: 'red',
        label: 'Red',
    },
    {
        value: 'green',
        label: 'Green',
    },
    {
        value: 'blue',
        label: 'Blue',
    },
    {
        value: 'orange',
        label: 'Orange',
    },
];

const cityOptions = [
    {
        value: 'kyiv',
        label: 'Kyiv',
    },
    {
        value: 'odessa',
        label: 'Odessa',
    },
    {
        value: 'rivne',
        label: 'Rivne',
    },
    {
        value: 'lviv',
        label: 'Lviv',
    },
];

const deliveryOptions = [
    {
        value: 'new post',
        label: 'New Post',
    },
    {
        value: 'urkposhta',
        label: 'Urkposhta',
    },
    {
        value: 'pickup',
        label: 'Pickup',
    },
];

const sizeOptions = [
    {
        value: 100,
        label: '100',
    },
    {
        value: 150,
        label: '150',
    },
    {
        value: 200,
        label: '200',
    },
];


const CalculatorSection = () => {
    const [selectedScore, setSelectedScore] = useState(sizeOptions[0].value)
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);
    const [score, setScore] = useState(100)
    const [money, setMoney] = useState(56.25)
    const [city, setCity] = useState(null);
    const [delivery, setDelivery] = useState(null);

    const [startDate, setStartDate] = useState(new Date());
    
    const minus = () => {
        if(score - selectedScore >= 100) {
            setScore(prevScore => prevScore - selectedScore);
        }
    }

    const plus = () => {
        setScore(prevScore => prevScore + selectedScore);
    }

    const changeScore = (e) => {
        setSelectedScore(e.value);
    }
    const changeColor = (e) => {
        setColor(e.value);
    }
    const changeSize = (e) => {
        setSize(e.value);
    }
    const changeCity = (e) => {
        setCity(e.value);
    }
    const changeDelivery = (e) => {
        setDelivery(e.value);
    }
 
    return (
        <>
            <Calculator>
                <CalculatorContainer>
                    <CalculatorH2>Calculator</CalculatorH2>
                    <CalculatorP>Nam libero tempore, cum soluta nobis est eligendi optio</CalculatorP>
                    <CalculatorWrapper>
                        <CalculatorSelectors>
                            <SelectorWrapper>
                                <Select handleChange={changeColor} width={'100%'} placeholder={'Colors'} options={colorsOptions}/>
                                <Select handleChange={changeSize} width={'100%'} placeholder={'Size'} options={sizeOptions}/>
                            </SelectorWrapper>
                            <SelectorWrapper>
                                <NumSelect selectedScore={selectedScore} score={score} minus={minus} plus={plus}/> 
                                <CalendarSelector startDate={startDate} setStartDate={setStartDate}/>
                            </SelectorWrapper>
                           
                            <SelectorWrapper2>
                                <Select handleChange={changeCity} width={'100%'} placeholder={'City'} options={cityOptions}/>
                                <Select handleChange={changeDelivery} width={'100%'} placeholder={'Delivery'} options={deliveryOptions}/>
                            </SelectorWrapper2>
                           
                        </CalculatorSelectors>
                        <CalculatorResults>
                            <ResultsWrap>
                                $ {money}
                            </ResultsWrap>
                                <ResultsBtn onClick={() => console.log({
                                    color,
                                    size,
                                    city,
                                    delivery,
                                    score,
                                    money,
                                    startDate,
                                })}>Proceed</ResultsBtn>
                        </CalculatorResults>
                    </CalculatorWrapper>
                </CalculatorContainer>
               
            </Calculator>
            
        </>
    )
}

export default CalculatorSection;
