import React from 'react';

const Nav = () => {
  return (
    <div>
      <div class="ui top attached menu">
        <div class="ui dropdown icon item">
          <i class="paw icon"></i>
          {/* <div class="menu">
            <div class="item">
              <i class="dropdown icon"></i>
              <span class="text">Zoo Animals</span>
              <div class="menu">
                <div class="item">Document</div>
                <div class="item">Image</div>
              </div>
            </div>
            <div class="item">Open...</div>
            <div class="item">Save...</div>
            <div class="item">Edit Permissions</div>
            <div class="divider"></div>
            <div class="header">Export</div>
            <div class="item">Share...</div>
          </div> */}
        </div>
        <h1 style={{ color: '#fb8500', paddingLeft: '20px' }}>Zoo Animals</h1>
        <div class="right menu">
          <div class="ui right aligned category search item">
            <div class="ui transparent icon input">
              <input
                class="prompt"
                type="text"
                placeholder="Search animals..."
              ></input>
              <i class="search link icon"></i>
            </div>
            <div class="results"></div>
          </div>
        </div>
      </div>
      <div class="ui bottom attached segment">
        <p></p>
      </div>
    </div>
  );
};

export default Nav;
