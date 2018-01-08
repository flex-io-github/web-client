import React from "react";
import PropTypes from 'prop-types';

import {Nav, INavLinkGroup} from 'office-ui-fabric-react/lib/Nav'

export const SidebarMenu = ({ groups, expanded, collapsed }) => (
    <div className="SidebarMenu">
        <Nav groups={groups}
            expandedStateText={expanded}
            collapsedStateText={collapsed}
        />
    </div>
);

SidebarMenu.props = {
    groups: INavLinkGroup,
    expanded: PropTypes.string,
    collapsed: PropTypes.string,
}

SidebarMenu.defaultProps = {
    groups: [{
      links: [{
        name: 'Account',
        url: '#',
        links: [{
          name: 'Login',
          url: '/login',
        }, {
          name: 'Register',
          url: '/register',
        }],
        isExpanded: true,
      }, {
        name: 'Documents',
        url: 'http://example.com',
        isExpanded: true,
      }, {
        name: 'Pages',
        url: 'http://msn.com',
      }, {
        name: 'Notebook',
        url: 'http://msn.com',
      }, {
        name: 'Long Name Test for elipsis. Longer than 12em!',
        url: 'http://example.com',
      }, {
        name: 'Edit Link',
        url: 'http://example.com',
        iconClassName: 'ms-Icon--Edit',
      }, {
        name: 'Edit',
        url: '#',
        icon: 'Edit',
        onClick: () => {},
      }]
    }],
    expanded: 'expanded',
    collapsed: 'collapsed',
  }

export default SidebarMenu