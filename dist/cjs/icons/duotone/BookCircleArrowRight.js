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
var BookCircleArrowRight_exports = {};
__export(BookCircleArrowRight_exports, {
  default: () => BookCircleArrowRight_default
});
module.exports = __toCommonJS(BookCircleArrowRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookCircleArrowRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M339.367 448H96C78.328 448 64 433.672 64 416C64 398.326 78.328 384 96 384H320.805C320.328 378.723 320 373.402 320 368C320 287.461 374.164 219.711 448 198.797V24C448 10.744 437.254 0 424 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H395C371.621 495.568 352.477 473.613 339.367 448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 224C416.461 224 352 288.463 352 368S416.461 512 496 512S640 447.537 640 368S575.539 224 496 224ZM571.312 379.312L515.312 435.312C512.188 438.438 508.094 440 504 440S495.812 438.438 492.688 435.312C486.438 429.062 486.438 418.937 492.688 412.688L521.375 384H432C423.164 384 416 376.836 416 368S423.164 352 432 352H521.375L492.688 323.312C486.438 317.062 486.438 306.937 492.688 300.688S509.063 294.438 515.312 300.688L571.312 356.688C577.562 362.938 577.562 373.062 571.312 379.312Z" })
    ]
  }
));
BookCircleArrowRightDuotone.displayName = "BookCircleArrowRightDuotone";
var BookCircleArrowRight_default = BookCircleArrowRightDuotone;
