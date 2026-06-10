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
var Sword_exports = {};
__export(Sword_exports, {
  default: () => Sword_default
});
module.exports = __toCommonJS(Sword_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SwordSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M110.117 227.645C103.867 221.396 93.744 221.396 87.494 227.645L68.744 246.395C63.246 251.768 62.496 260.268 66.746 266.643L120.117 346.637L66.621 400.133L37.373 385.508C31.998 382.76 25.623 383.885 21.373 388.133L4.125 405.383C-1.375 410.758 -1.375 419.631 4.125 425.006L86.994 507.875C92.369 513.375 101.242 513.375 106.617 507.875L123.865 490.627C128.115 486.377 129.24 480.002 126.49 474.627L111.867 445.379L165.363 391.883L245.357 445.254C251.732 449.504 260.23 448.754 265.605 443.254L284.354 424.506C290.604 418.256 290.604 408.133 284.354 401.883L110.117 227.645ZM493.715 0.162L399.971 16.035L171.863 244.145L267.855 340.137L495.965 112.029L511.838 18.285C513.338 7.787 504.213 -1.338 493.715 0.162Z" })
  }
));
SwordSolid.displayName = "SwordSolid";
var Sword_default = SwordSolid;
