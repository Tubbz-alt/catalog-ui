import React from 'react'
import { connect } from 'react-redux';
import { removeAlert } from '../../Store/Actions/AlertActions';
import { Alert, Button } from '@patternfly/react-core';
import { TimesIcon } from '@patternfly/react-icons';

const Alerts = ({ alerts, removeAlert }) => (
	<div>
		{alerts.map(({ variant, title, description }, index) => (
			<Alert style={{marginBottom: 10}}key={index} variant={variant} title={title} action={<Button variant="plain" onClick={() => removeAlert(index)}><TimesIcon /></Button>}>
				{description}
			</Alert>
		))}
	</div>
);

const mapStateToProps = ({AlertReducer: {alerts}}) => ({
	alerts
})

const mapDispatchToProps = dispatch => ({
    removeAlert: (index) => dispatch(removeAlert(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Alerts)
