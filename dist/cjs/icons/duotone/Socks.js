var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Socks_exports = {};
__export(Socks_exports, {
  default: () => Socks_default
});
module.exports = __toCommonJS(Socks_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SocksDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M127.996 127.998H287.998V95.998H127.996V127.998ZM127.996 271.996L41.345 336.596C1.996 366.146 -12.526 420.994 12.125 463.645C29.445 493.613 61.453 512.049 96.066 511.994C116.814 512.004 137.004 505.266 153.586 492.795L175.447 476.404C145.597 420.994 161.906 350.545 214.648 310.996L287.998 255.996V159.998H127.996V271.996ZM159.996 0C142.324 0 127.996 14.326 127.996 32V64H287.998V32C288.062 21.361 290.814 10.91 295.998 1.619C293.388 0.92 290.838 0 287.998 0H159.996ZM319.998 64V95.998H512V64H319.998ZM319.998 159.998H512V127.998H319.998V159.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.998 64H128V95.998H287.998V64ZM287.998 127.998H128V159.998H287.998V127.998ZM479.994 0H351.996C334.324 0 319.996 14.326 319.996 32V64H511.994V32C511.994 14.326 497.668 0 479.994 0ZM319.996 127.998H511.994V95.998H319.996V127.998ZM319.996 271.996L233.867 336.596C194.459 366.146 179.998 420.994 204.648 463.645C230.971 509.668 289.617 525.639 335.641 499.318C335.643 499.316 335.645 499.314 335.646 499.314C342.941 495.131 335.967 499.996 460.795 406.375C493.02 382.207 511.988 344.277 511.994 303.996V159.998H319.996V271.996Z" })
    ]
  }
));
SocksDuotone.displayName = "SocksDuotone";
var Socks_default = SocksDuotone;
