import React from 'react';
import PropTypes from 'prop-types';

import FakeItemPrice from '../FakeProductPrice';

export const QuickPriceEdit = ({toggleEditing, item, onChange, index}) => (
    <div className="col-md-6 col-lg-3">
      <div className="card mb-3">
        <div className="card-body">
          {item.isEditing
              ?
              <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    className="form-control mb-2 mr-sm-2"
                    placeholder="Item"
                    value={item.name}
                    onChange={event => onChange(event, index)}
                    required
                />
                <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Price"
                    value={item.price}
                    onChange={event => onChange(event, index)}
                    required
                />
              </div>
              :
              <div>
                <FakeItemPrice price={item.price} onClick={toggleEditing} />
              </div>
          }

          <div className="row justify-content-center">
            <div>
              <button
                  type="button"
                  className="btn btn-primary mr-2"
                  onClick={toggleEditing}>
                {item.isEditing ? "Save" : "Edit"}
              </button>
              <button
                  type="button"
                  className="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
);

QuickPriceEdit.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.string.isRequired
  }),
  toggleEditing: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
