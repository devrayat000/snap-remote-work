import {
	UnstyledButton,
	createPolymorphicComponent,
	createStyles,
	type UnstyledButtonProps
} from '@mantine/core';
import { forwardRef } from 'react';

type Props = {
	variant?: 'default' | 'outline';
};

type NavLinkProps = UnstyledButtonProps & Props;

const useStyles = createStyles((theme, props: Props) => ({
	button: {
		color: theme.other['medium-gray'],
		...(props.variant === 'outline' && {
			border: `2px solid ${theme.other['medium-gray']}`,
			padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
			borderRadius: theme.radius.lg
		}),
		...theme.fn.hover({
			color: theme.other['almost-black'],
			...(props.variant === 'outline' && {
				border: `2px solid ${theme.other['almost-black']}`
			})
		})
	}
}));

const NavLink = forwardRef<HTMLButtonElement, NavLinkProps>(({ className, ...props }, ref) => {
	const { classes, cx } = useStyles(props);
	return <UnstyledButton {...props} ref={ref} className={cx(classes.button, className)} />;
});

export default createPolymorphicComponent<'button', NavLinkProps>(NavLink);
