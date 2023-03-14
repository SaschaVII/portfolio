import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<div className="container mx-auto px-8 lg:px-36 2xl:px-72 pt-2">
					<Main />
					<NextScript />
				</div>
			</body>
		</Html>
	);
}
