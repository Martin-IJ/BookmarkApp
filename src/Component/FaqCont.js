import React, {useState} from "react";
import AccordionDd from "./AccordionDd";

const FaqCont = () => {
  const [addAccordion, setAddAccordion] = useState(false);
  const toggleAccordion = () => {
    setAddAccordion(!addAccordion)
  }
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="faq page-cont">
        <h1 className="banh1Text">Frequently Asked Question</h1>
        <p className="prgText">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          nihil similique, voluptatibus animi id fugiat odio nam numquam
          cupiditate at.
        </p>
        <div
          class="accordion accordion-flush text-start"
          id="accordionFlushExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What is Bookmark
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam quo harum quia. Tempore eius odit, cumque quidem nemo
                pariatur velit repellendus fugit placeat voluptates magni ab
                expedita hic dolores delectus incidunt dolore excepturi ut
                deleniti aliquid omnis soluta veritatis recusandae dolorum!
                Numquam quasi necessitatibus veniam doloremque earum dolorem,
                ullam fugit.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                How can I request a new browser
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                minima vero, deleniti similique quidem modi voluptate unde
                fugiat blanditiis provident beatae nisi voluptas architecto quas
                voluptatem fugit. Dignissimos, enim. Incidunt cupiditate magni
                aspernatur placeat, debitis eos commodi molestias nulla
                veritatis deserunt illo earum ratione, neque dolores
                perspiciatis nam quaerat reiciendis?
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Is there a mobile app?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                expedita totam, officia necessitatibus architecto enim optio
                quam nobis! Cupiditate unde est aliquid fugit, blanditiis animi
                aut, rerum modi perferendis quisquam vel deleniti suscipit,
                perspiciatis pariatur aliquam inventore neque quae nobis
                expedita atque. Maxime, odio possimus? Nulla ut accusamus ex
                exercitationem!
              </div>
            </div>
          </div>
          {addAccordion && <AccordionDd/>}
        </div>
        <button onClick={toggleAccordion} className="btn bg-primary text-light mt-4">{addAccordion ? 'Less Info' : 'More Info'}</button>
      </div>
    </div>
  );
};

export default FaqCont;
