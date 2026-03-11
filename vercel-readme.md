# Vercel Configuration Instructions

## What is `vercel.json` doing?

The `vercel.json` file in this directory applies an `X-Robots-Tag: noindex, nofollow` HTTP response header to every single route (`/(.*)`) on the site.

This tells search engines (like Google) **not** to index this development version of the site and **not** to follow any of its links.

## How to allow indexing (Go Live)

When you are ready to make the site public and allow search engines to rank it, you need to remove this restriction.

You have two options to allow indexing:

### Option 1: Delete `vercel.json` entirely (Recommended)
If `vercel.json` is not being used for any other Vercel configuration (like custom redirects or rewrites), the easiest way to allow indexing is to delete the `vercel.json` file completely.

1. Delete the `vercel.json` file from the root directory.
2. Commit and push the deletion (or redeploy on Vercel).

### Option 2: Remove the "headers" block
If you add other configurations to `vercel.json` in the future and need to keep the file, you can just delete the specific rule that blocks indexing.

1. Open `vercel.json`.
2. Delete the `headers` section so that it looks like an empty object `{}` or just contains your other configurations.
3. Commit and push the changes (or redeploy on Vercel).

*Note: You cannot add comments to `vercel.json` because standard JSON does not support comments.*
