import React from 'react';
import shape from "../../Asset/Service/Shape.png"
import "../../Styles/Quesions.css"
const Quesions = () => {
  return (
    <div className="Question">
      <div className="quesion-position">
        <div>
          <h1 className="quesion-heading">Frequently Asked <br /> Questions
            <img src={shape} alt="" className="quesion-shape" />
          </h1>
        </div>
        <div class="accordion-container">
          <div class="accordion" id="myAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed collapse-design show" data-bs-toggle="collapse" data-bs-target="#collapseOne">Can your program be taken online ?</button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#myAccordion">
                <div class="card-body w-50">
                  <p className="accordion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis et egestas feugiat. Vel semper sed dignissim proin nisi velit ultrices amet.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button type="button" class="accordion-button collapse-design" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Do we need to bring anything to classes ?</button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                <div class="card-body w-50">
                  <p className="accordion-text">Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development. It is a collection of CSS and HTML conventions</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button type="button" class="accordion-button collapsed collapse-design" data-bs-toggle="collapse" data-bs-target="#collapseThree">Will you help me track progress and improvements ?</button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body w-50">
                  <p className="accordion-text">CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button type="button" class="accordion-button collapsed collapse-design" data-bs-toggle="collapse" data-bs-target="#collapseFour">Do you accept online payments ?</button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body w-50">
                  <p className="accordion-text">CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button type="button" class="accordion-button collapsed collapse-design" data-bs-toggle="collapse" data-bs-target="#collapseFive">Can your program be taken online ?</button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body w-50">
                  <p className="accordion-text">CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quesions;