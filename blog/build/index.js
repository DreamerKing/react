var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_exports = {};
__export(assets_manifest_exports, {
  default: () => assets_manifest_default
});
var assets_manifest_default, init_assets_manifest = __esm({
  "server-assets-manifest:@remix-run/dev/assets-manifest"() {
    assets_manifest_default = { entry: { module: "/build/entry.client-I4L4YZKE.js", imports: ["/build/_shared/chunk-IU5VGXTL.js", "/build/_shared/chunk-DG4HR4CT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-F7UXBYQC.js", imports: ["/build/_shared/chunk-5B6WUN7S.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-AL3UG3FO.js", imports: ["/build/_shared/chunk-VYHS2Q3T.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-K345YID3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-PWVNCJSI.js", imports: ["/build/_shared/chunk-OYMK4NMC.js", "/build/_shared/chunk-VYHS2Q3T.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-EOB374M5.js", imports: ["/build/_shared/chunk-OYMK4NMC.js", "/build/_shared/chunk-VYHS2Q3T.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-IVCPR3TQ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-YD7KYEDC.js", imports: ["/build/_shared/chunk-VYHS2Q3T.js", "/build/_shared/chunk-AC7UQQEL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-A4LYDB7S.js", imports: ["/build/_shared/chunk-HCKB6UHP.js", "/build/_shared/chunk-5B6WUN7S.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/notes._index": { id: "routes/notes._index", parentId: "routes/notes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/notes._index-KOFMYYZ3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes.new": { id: "routes/notes.new", parentId: "routes/notes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.new-QHQPTPTI.js", imports: ["/build/_shared/chunk-5B6WUN7S.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.$slug": { id: "routes/posts.$slug", parentId: "root", path: "posts/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.$slug-BRRYKP2Z.js", imports: ["/build/_shared/chunk-HCKB6UHP.js", "/build/_shared/chunk-KXEE5PWS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts._index": { id: "routes/posts._index", parentId: "root", path: "posts", index: !0, caseSensitive: void 0, module: "/build/routes/posts._index-G3EZMPXP.js", imports: ["/build/_shared/chunk-KXEE5PWS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "38b75242", hmr: void 0, url: "/build/manifest-38B75242.js" };
  }
});

// node_modules/@remix-run/css-bundle/dist/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/css-bundle/dist/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var assetsManifest = (init_assets_manifest(), __toCommonJS(assets_manifest_exports));
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var assetsManifest__default = /* @__PURE__ */ _interopDefaultLegacy(assetsManifest), cssBundleHref2 = assetsManifest__default.default.cssBundleHref;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_css_bundle = __toESM(require_server()), import_node3 = require("@remix-run/node"), import_react2 = require("@remix-run/react");

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: !0
    }
  });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.password.hash
  ))
    return null;
  let { password: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-Q3EUNH7G.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
], loader = async ({ request }) => (0, import_node3.json)({ user: await getUser(request) });
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/notes.$noteId.tsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => NoteDetailsPage,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/note.server.ts
function getNote({
  id,
  userId
}) {
  return prisma.note.findFirst({
    select: { id: !0, body: !0, title: !0 },
    where: { id, userId }
  });
}
function getNoteListItems({ userId }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: !0, title: !0 },
    orderBy: { updatedAt: "desc" }
  });
}
function createNote({
  body,
  title,
  userId
}) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
function deleteNote({
  id,
  userId
}) {
  return prisma.note.deleteMany({
    where: { id, userId }
  });
}

// app/routes/notes.$noteId.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader2 = async ({ params, request }) => {
  let userId = await requireUserId(request);
  (0, import_tiny_invariant2.default)(params.noteId, "noteId not found");
  let note = await getNote({ id: params.noteId, userId });
  if (!note)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node4.json)({ note });
}, action = async ({ params, request }) => {
  let userId = await requireUserId(request);
  return (0, import_tiny_invariant2.default)(params.noteId, "noteId not found"), await deleteNote({ id: params.noteId, userId }), (0, import_node4.redirect)("/notes");
};
function NoteDetailsPage() {
  let data = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-2xl font-bold", children: data.note.title }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "py-6", children: data.note.body }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hr", { className: "my-4" }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/notes.$noteId.tsx",
        lineNumber: 43,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react3.useRouteError)();
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.message
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 58,
    columnNumber: 12
  }, this) : (0, import_react3.isRouteErrorResponse)(error) ? error.status === 404 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: "Note not found" }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 66,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 62,
    columnNumber: 12
  }, this);
}

// app/routes/notes._index.tsx
var notes_index_exports = {};
__export(notes_index_exports, {
  default: () => NoteIndexPage
});
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
    "No note selected. Select a note on the left, or",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "new", className: "text-blue-500 underline", children: "create a new note." }, void 0, !1, {
      fileName: "app/routes/notes._index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes._index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/posts._index.tsx
var posts_index_exports = {};
__export(posts_index_exports, {
  default: () => Posts,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/models/post.server.ts
async function getPosts() {
  return prisma.post.findMany();
}
async function getPost(slug) {
  return prisma.post.findUnique({ where: { slug } });
}

// app/routes/posts._index.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader3 = async () => (0, import_node5.json)({
  posts: await getPosts()
});
function Posts() {
  let { posts } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Posts" }, void 0, !1, {
      fileName: "app/routes/posts._index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: post.slug, className: "text-blue-600 underline", children: post.title }, void 0, !1, {
      fileName: "app/routes/posts._index.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, post.slug, !1, {
      fileName: "app/routes/posts._index.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/posts._index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts._index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader4
});
var loader4 = async ({ request }) => {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL("/", `http://${host}`);
    return await Promise.all([
      prisma.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
};

// app/routes/posts.$slug.tsx
var posts_slug_exports = {};
__export(posts_slug_exports, {
  default: () => PostSlug,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader5 = async ({ params }) => {
  (0, import_tiny_invariant3.default)(params.slug, "params.slug is required");
  let post = await getPost(params.slug);
  return (0, import_tiny_invariant3.default)(post, `Post not found: ${params.slug}`), (0, import_node6.json)({ post });
};
function PostSlug() {
  let { post } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "mx-auto max-w-4xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "my-6 border-b-2 text-center text-3xl", children: post.title }, void 0, !1, {
    fileName: "app/routes/posts.$slug.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts.$slug.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/notes.new.tsx
var notes_new_exports = {};
__export(notes_new_exports, {
  action: () => action2,
  default: () => NewNotePage
});
var import_node7 = require("@remix-run/node"), import_react7 = require("@remix-run/react"), import_react8 = require("react");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  let userId = await requireUserId(request), formData = await request.formData(), title = formData.get("title"), body = formData.get("body");
  if (typeof title != "string" || title.length === 0)
    return (0, import_node7.json)(
      { errors: { body: null, title: "Title is required" } },
      { status: 400 }
    );
  if (typeof body != "string" || body.length === 0)
    return (0, import_node7.json)(
      { errors: { body: "Body is required", title: null } },
      { status: 400 }
    );
  let note = await createNote({ body, title, userId });
  return (0, import_node7.redirect)(`/notes/${note.id}`);
};
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  let actionData = (0, import_react7.useActionData)(), titleRef = (0, import_react8.useRef)(null), bodyRef = (0, import_react8.useRef)(null);
  return (0, import_react8.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.title ? (_b2 = titleRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.body && ((_d2 = bodyRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_react7.Form,
    {
      method: "post",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Title: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "input",
              {
                ref: titleRef,
                name: "title",
                className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
                "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.title ? !0 : void 0,
                "aria-errormessage": (_b = actionData == null ? void 0 : actionData.errors) != null && _b.title ? "title-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.new.tsx",
                lineNumber: 61,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          (_c = actionData == null ? void 0 : actionData.errors) != null && _c.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 72,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: "Body: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "textarea",
              {
                ref: bodyRef,
                name: "body",
                rows: 8,
                className: "w-full flex-1 rounded-md border-2 border-blue-500 px-3 py-2 text-lg leading-6",
                "aria-invalid": (_d = actionData == null ? void 0 : actionData.errors) != null && _d.body ? !0 : void 0,
                "aria-errormessage": (_e = actionData == null ? void 0 : actionData.errors) != null && _e.body ? "body-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.new.tsx",
                lineNumber: 81,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          (_f = actionData == null ? void 0 : actionData.errors) != null && _f.body ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Save"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 100,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 99,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/notes.new.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_react11 = require("@remix-run/react");

// app/utils.ts
var import_react9 = require("@remix-run/react"), import_react10 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react9.useMatches)(), route = (0, import_react10.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  );
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user == "object" && typeof user.email == "string";
}
function useOptionalUser() {
  let data = useMatchesData("root");
  if (!(!data || !isUser(data.user)))
    return data.user;
}
function useUser() {
  let maybeUser = useOptionalUser();
  if (!maybeUser)
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  return maybeUser;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/routes/_index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta = () => [{ title: "Remix Notes" }];
function Index() {
  let user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: "relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative sm:pb-16 sm:pt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "img",
          {
            className: "h-full w-full object-cover",
            src: "https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg",
            alt: "Sonic Youth On Stage"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 16,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "block uppercase text-yellow-500 drop-shadow-md", children: "Indie Stack" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 25,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 24,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl", children: "Check the README.md file for instructions on how to get this project deployed." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_react11.Link,
          {
            to: "/notes",
            className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
            children: [
              "View Notes for ",
              user.email
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 35,
            columnNumber: 19
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_react11.Link,
            {
              to: "/join",
              className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
              children: "Sign up"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 43,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            import_react11.Link,
            {
              to: "/login",
              className: "flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600",
              children: "Log In"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 49,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 42,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "https://remix.run", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "img",
          {
            src: "https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg",
            alt: "Remix",
            className: "mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 59,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-6 flex flex-wrap justify-center gap-8", children: [
      {
        src: "https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg",
        alt: "Fly.io",
        href: "https://fly.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764395-137ec949-382c-43bd-a3c0-0cb8cb22e22d.svg",
        alt: "SQLite",
        href: "https://sqlite.org"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg",
        alt: "Prisma",
        href: "https://prisma.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
        alt: "Tailwind",
        href: "https://tailwindcss.com"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
        alt: "Cypress",
        href: "https://www.cypress.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772386-75444196-0604-4340-af28-53b236faa182.svg",
        alt: "MSW",
        href: "https://mswjs.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
        alt: "Vitest",
        href: "https://vitest.dev"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
        alt: "Testing Library",
        href: "https://testing-library.com"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
        alt: "Prettier",
        href: "https://prettier.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
        alt: "ESLint",
        href: "https://eslint.org"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
        alt: "TypeScript",
        href: "https://typescriptlang.org"
      }
    ].map((img) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "a",
      {
        href: img.href,
        className: "flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { alt: img.alt, src: img.src, className: "object-contain" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 133,
          columnNumber: 17
        }, this)
      },
      img.href,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 128,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 70,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3,
  loader: () => loader6
});
var import_node8 = require("@remix-run/node");
var action3 = async ({ request }) => logout(request), loader6 = async () => (0, import_node8.redirect)("/");

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  default: () => LoginPage,
  loader: () => loader7,
  meta: () => meta2
});
var import_node9 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), import_react13 = require("react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader7 = async ({ request }) => await getUserId(request) ? (0, import_node9.redirect)("/") : (0, import_node9.json)({}), action4 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node9.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node9.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node9.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    redirectTo,
    remember: remember === "on",
    request,
    userId: user.id
  }) : (0, import_node9.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}, meta2 = () => [{ title: "Login" }];
function LoginPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react12.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/notes", actionData = (0, import_react12.useActionData)(), emailRef = (0, import_react13.useRef)(null), passwordRef = (0, import_react13.useRef)(null);
  return (0, import_react13.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 83,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 90,
            columnNumber: 15
          },
          this
        ),
        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 111,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "current-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 118,
            columnNumber: 15
          },
          this
        ),
        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 129,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 136,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Log in"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 137,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "input",
          {
            id: "remember",
            name: "remember",
            type: "checkbox",
            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 145,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "label",
          {
            htmlFor: "remember",
            className: "ml-2 block text-sm text-gray-900",
            children: "Remember me"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 151,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          import_react12.Link,
          {
            className: "text-blue-500 underline",
            to: {
              pathname: "/join",
              search: searchParams.toString()
            },
            children: "Sign up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 160,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 143,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 81,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

// app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader8
});
var import_node10 = require("@remix-run/node"), import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => {
  let userId = await requireUserId(request), noteListItems = await getNoteListItems({ userId });
  return (0, import_node10.json)({ noteListItems });
};
function NotesPage() {
  let data = (0, import_react14.useLoaderData)(), user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("header", { className: "flex items-center justify-between bg-slate-800 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-3xl font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Link, { to: ".", children: "Notes" }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: user.email }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600",
          children: "Logout"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/notes.tsx",
          lineNumber: 27,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { className: "flex h-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "h-full w-80 border-r bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Link, { to: "new", className: "block p-4 text-xl text-blue-500", children: "+ New Note" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("hr", {}, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        data.noteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "p-4", children: "No notes yet" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ol", { children: data.noteListItems.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          import_react14.NavLink,
          {
            className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
            to: note.id,
            children: [
              "\u{1F4DD} ",
              note.title
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/notes.tsx",
            lineNumber: 50,
            columnNumber: 19
          },
          this
        ) }, note.id, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.Outlet, {}, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action5,
  default: () => Join,
  loader: () => loader9,
  meta: () => meta3
});
var import_node11 = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_react16 = require("react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader9 = async ({ request }) => await getUserId(request) ? (0, import_node11.redirect)("/") : (0, import_node11.json)({}), action5 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node11.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node11.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node11.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node11.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let user = await createUser(email, password);
  return createUserSession({
    redirectTo,
    remember: !1,
    request,
    userId: user.id
  });
}, meta3 = () => [{ title: "Sign Up" }];
function Join() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react15.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react15.useActionData)(), emailRef = (0, import_react16.useRef)(null), passwordRef = (0, import_react16.useRef)(null);
  return (0, import_react16.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react15.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 88,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 95,
            columnNumber: 15
          },
          this
        ),
        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 116,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "new-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 123,
            columnNumber: 15
          },
          this
        ),
        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 134,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 115,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 141,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Create Account"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/join.tsx",
        lineNumber: 142,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        import_react15.Link,
        {
          className: "text-blue-500 underline",
          to: {
            pathname: "/login",
            search: searchParams.toString()
          },
          children: "Log in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 151,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 149,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/join.tsx",
    lineNumber: 86,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
init_assets_manifest();
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/notes.$noteId": {
    id: "routes/notes.$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: notes_noteId_exports
  },
  "routes/notes._index": {
    id: "routes/notes._index",
    parentId: "routes/notes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: notes_index_exports
  },
  "routes/posts._index": {
    id: "routes/posts._index",
    parentId: "root",
    path: "posts",
    index: !0,
    caseSensitive: void 0,
    module: posts_index_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/posts.$slug": {
    id: "routes/posts.$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: posts_slug_exports
  },
  "routes/notes.new": {
    id: "routes/notes.new",
    parentId: "routes/notes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: notes_new_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/server.js:
  (**
   * @remix-run/css-bundle v1.16.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
