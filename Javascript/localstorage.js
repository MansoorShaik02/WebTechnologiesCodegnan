< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>LocalStorage Example</title>
                </head>
                <body>
                    <h1>LocalStorage Example</h1>

                    <input type="text" id="nameInput" placeholder="Enter your name" />
                    <button onclick="saveName()">Save Name</button>
                    <button onclick="getName()">Get Name</button>
                    <button onclick="clearName()">Clear Name</button>

                    <p id="output"></p>

                    <script>
        // Save data to localStorage
                        function saveName() {
            const name = document.getElementById('nameInput').value;
                        if (name) {
                            localStorage.setItem('name', name);
                        document.getElementById('output').textContent = `Name "${name}" saved!`;
            } else {
                            alert('Please enter a name to save.');
            }
        }

                        // Retrieve data from localStorage
                        function getName() {
            const name = localStorage.getItem('name');
                        if (name) {
                            document.getElementById('output').textContent = `Retrieved name: ${name}`;
            } else {
                            document.getElementById('output').textContent = 'No name found in localStorage.';
            }
        }

                        // Clear data from localStorage
                        function clearName() {
                            localStorage.removeItem('name');
                        document.getElementById('output').textContent = 'Name cleared from localStorage.';
        }
                    </script>
                </body>
            </html>
