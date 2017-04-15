import React from 'react'
import FlipCard from 'react-flipcard'


const FlashcardDisplayView = ( {getCards, isFlipped, results, showCard} ) => {
  console.log('results prop equals', results)
    return (
      <div>
      {results.map((result, index) => (
        <div className="box" key={index}>
            <FlipCard
              disabled={false}
              flipped={isFlipped}
            >
              <div>

              <div>{result.term}</div>
                


              </div>
              <div>
              <div>{result.definition}</div>
                
              </div>
            </FlipCard>
          </div>
        ))}
        </div>
      );
}

export default FlashcardDisplayView
