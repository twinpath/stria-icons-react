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
var Pizza_exports = {};
__export(Pizza_exports, {
  default: () => Pizza_default
});
module.exports = __toCommonJS(Pizza_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PizzaRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176.011 328C176.011 341.25 186.761 352 200.009 352S224.007 341.25 224.007 328S213.257 304 200.009 304S176.011 314.75 176.011 328ZM216.007 144C202.759 144 192.009 154.75 192.009 168S202.759 192 216.007 192S240.005 181.25 240.005 168S229.255 144 216.007 144ZM523.224 100.125C520.224 96.25 515.599 94.125 510.851 94.125C506.476 94.125 502.351 95.875 499.226 98.875L342.119 256L499.226 413C502.351 416.125 506.476 417.875 510.851 417.875C515.599 417.875 520.224 415.625 523.224 411.875C558.381 365.91 575.973 311.021 576 256.125C576.026 201.146 558.434 146.16 523.224 100.125ZM455.857 301.875L409.986 256L455.732 210.375C460.605 224.75 463.98 239.875 463.98 256C463.855 271.625 461.105 287.125 455.857 301.875ZM505.101 351L480.853 326.75C501.101 281.75 500.976 230.25 480.728 185.25L505.101 161C535.597 220.625 535.597 291.375 505.101 351ZM256.503 256L425.609 86.875C431.984 80.375 431.984 69.5 425.109 63.5C378.49 22.5 318.496 -0.125 256.503 0C175.386 0 94.271 38.25 42.652 114.875C14.217 157 0 206.5 0 256C0 305.5 14.217 355 42.652 397.125C94.271 473.75 175.386 512 256.503 512C318.496 512.125 378.49 489.5 425.109 448.5C431.984 442.5 431.984 431.625 425.609 425.125L256.503 256ZM188.636 256L317.996 385.375C298.748 394.875 277.501 399.875 256.003 400C176.636 400 112.019 335.375 112.019 256S176.636 112 256.003 112C277.501 112.125 298.748 117.125 317.996 126.625L188.636 256ZM256.503 464C186.011 464 122.642 429.875 82.521 370.375C36.277 302 36.277 210.125 82.521 141.75C122.642 82.125 186.011 48 256.503 48C295 48 332.871 58.625 365.617 78.875L341.869 102.75C315.621 87.875 286.125 80 256.003 80C158.763 80 80.023 158.75 80.023 256S158.763 432 256.003 432C286.125 432 315.621 424.125 341.869 409.25L365.617 433.125C332.871 453.375 295 464 256.503 464Z" })
  }
));
PizzaRegular.displayName = "PizzaRegular";
var Pizza_default = PizzaRegular;
