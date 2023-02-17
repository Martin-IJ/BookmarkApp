import React from 'react'

const AccordionDd = () => {
  return (
    <div>
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
                This thing hard ahswr 😩
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
    </div>
  )
}

export default AccordionDd