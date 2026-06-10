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
var Ring_exports = {};
__export(Ring_exports, {
  default: () => Ring_default
});
module.exports = __toCommonJS(Ring_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 64C114.615 64 0 121.307 0 192V320C0 390.693 114.615 448 256 448S512 390.693 512 320V192C512 121.307 397.385 64 256 64ZM256 80C386.094 80 496 131.289 496 192C496 211.59 484.428 230.162 464.555 246.385C418.215 213.607 342.389 192 256 192S93.785 213.607 47.445 246.385C27.572 230.162 16 211.59 16 192C16 131.289 125.906 80 256 80ZM451.096 256.143C407.133 284.838 335.404 304 256 304S104.867 284.838 60.904 256.143C104.83 227.338 176.422 208 256 208S407.17 227.338 451.096 256.143ZM496 320C496 380.711 386.094 432 256 432S16 380.711 16 320V236.199C52.029 285.076 145.734 320 256 320S459.971 285.076 496 236.199V320Z" })
  }
));
RingThin.displayName = "RingThin";
var Ring_default = RingThin;
