# Makes of Cars — API Reference (Hackmamba Sprint Week 3)

This project is my Week 3 submission for the Hackmamba API Documentation Sprint. Week 3 focuses on documenting one public REST API endpoint using the five core components of API reference documentation.

## Live link

https://manueldezman.github.io/makes-of-cars-api-reference/

## What I documented

**Public API:** NHTSA vPIC (Vehicle Product Information Catalog)  
**Endpoint:** `GET https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json`  
**Purpose:** Returns a list of vehicle makes.

## How this matches the Week 3 requirements (5 core components)

1. **Resource description**
   - Introduces what the resource represents (Makes of Cars) and what the endpoint returns.

2. **Endpoint + method**
   - Clearly shows the HTTP method (`GET`) and endpoint path (`api/vehicles/getallmakes`).

3. **Parameters**
   - Documents the `format` query parameter in a table (required/optional, description, type, examples).

4. **Request example**
   - Includes a sample `curl` request you can run.

5. **Response example + schema**
   - Includes a sample JSON response.
   - Includes a **Response Description** table explaining each returned response item.

## Documentation UX features I implemented

- **Copy buttons**
  - Copy the endpoint path
  - Copy the sample `curl` request
  - Copy the sample JSON response

- **Open in Postman**
  - A button in the Sample Request section opens Postman Web and copies the `curl` command so you can import it quickly:
    - Postman → **Import** → **Paste cURL**

- **Readable layout**
  - Sidebar navigation to all sections
  - Consistent table styling for Parameters + Response Description
  - Code blocks with action buttons pinned at the top-right

## What was hard to write (reflection)

- The **response description/schema** was the hardest part: deciding how to represent nested fields clearly and consistently.
- Presenting **parameters** cleanly without overloading the table with too much detail.

## Next improvements

- Add an **Errors / Status Codes** section (common failure cases + what users should do).
- Add a **Base URL** section and link to the official API docs.
- Add more examples (XML vs JSON/CSV) and show what changes when `format=xml|json|csv`.

