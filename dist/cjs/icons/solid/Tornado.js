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
var Tornado_exports = {};
__export(Tornado_exports, {
  default: () => Tornado_default
});
module.exports = __toCommonJS(Tornado_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TornadoSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M407.781 42.094C415.312 35.531 417.999 24.969 414.468 15.594C410.968 6.219 401.998 0 391.998 0L24.146 0.031C11.146 0.031 0.49 10.406 0.146 23.406C-0.559 50.322 1.332 74.18 4.927 95.938H358.847C367.919 80.717 383.402 63.338 407.781 42.094ZM387.654 195.906C365.632 170.576 348.697 150.994 348.656 127.938H12.027C23.498 168.34 42.378 199.279 65.15 223.938H410.951C403.374 214.107 395.4 204.814 387.654 195.906ZM303.589 485.344C302.464 495.469 307.839 505.188 317.027 509.625C320.339 511.219 323.904 512 327.435 512C333.654 512 339.779 509.594 344.373 505C388.101 461.389 417.712 421.326 433.734 383.938H285.103C300.804 408.574 308.646 440.01 303.589 485.344ZM431.636 255.938H100.394C127.011 276.209 155.738 291.613 182.4 305.844C210.542 320.854 236.412 334.701 257.101 351.938H443.923C446.373 341.102 447.994 330.416 447.999 320C448.013 295.412 441.349 274.555 431.636 255.938Z" })
  }
));
TornadoSolid.displayName = "TornadoSolid";
var Tornado_default = TornadoSolid;
