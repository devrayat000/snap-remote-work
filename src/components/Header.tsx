import { Anchor, Burger, Button, createStyles, Group, Header, MediaQuery } from '@mantine/core';

import { ReactComponent as IconLogo } from '~/assets/images/logo.svg';
import NavLink from './NavLink';

const useStyles = createStyles((theme) => ({
	header: {
		borderBottom: 'none'
	},
	flex: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: theme.spacing.lg,
		paddingRight: theme.spacing.lg,
		[theme.fn.largerThan('md')]: {
			justifyContent: 'start',
			gap: theme.spacing.xl * 3,
			paddingLeft: theme.spacing.xl * 1.5,
			paddingRight: theme.spacing.xl * 1.5
		}
	},
	links: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexGrow: 1
	},
	mainLinks: {
		gap: theme.spacing.xl * 1.5
	}
}));

const MyHeader = () => {
	const { classes } = useStyles();

	return (
		<Header height={80} className={classes.header}>
			<div className={classes.flex}>
				<IconLogo data-testid="logo" />
				<MediaQuery smallerThan="md" styles={{ display: 'none' }}>
					<div className={classes.links} data-testid="links">
						<Group align="center" className={classes.mainLinks} data-testid="main-links">
							<NavLink component="a">Features</NavLink>
							<NavLink component="a">Company</NavLink>
							<NavLink component="a">Careers</NavLink>
							<NavLink component="a">About</NavLink>
						</Group>
						<Group align="center" className={classes.mainLinks} data-testid="auth-links">
							<NavLink component="a">Login</NavLink>
							<NavLink component="a" variant="outline">
								Register
							</NavLink>
						</Group>
					</div>
				</MediaQuery>
				<MediaQuery largerThan="md" styles={{ display: 'none' }}>
					<Burger data-testid="burger" opened={false} />
				</MediaQuery>
			</div>
		</Header>
	);
};

export default MyHeader;
