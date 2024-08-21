.App {
	height: 100vh;
	max-width: 100vw;
	--border-bottom: 4px solid red;
	--padding: 1.2em;
	--heading-font-size: 1.4rem;
	--gen-font-size: 1.4rem;
	font-family: Arial, Helvetica, sans-serif;
}

.App-header {
	font-size: var(--heading-font-size);
	color: red;
	display: flex;
	align-items: center;
	padding: var(--padding);
	border-bottom: var(--border-bottom);
}

.App-header img {
	width: 250px;
	height: 250px;
}

.App-body {
	font-size: var(--gen-font-size);
	padding: var(--padding);
	border-bottom: var(--border-bottom);
	height: 45%;
}

.App-footer {
	font-size: var(--gen-font-size);
	padding: var(--padding);
	text-align: center;
	font-style: italic;
}
