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
var HandBackPointUp_exports = {};
__export(HandBackPointUp_exports, {
  default: () => HandBackPointUp_default
});
module.exports = __toCommonJS(HandBackPointUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandBackPointUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M226.469 61V166.594C230.875 165.547 235.406 165 240 165H254.781C270.813 165 285.844 171.375 296.969 182.531C302.469 180.844 308.094 180 313.844 180H328.625C350.094 180 369.656 191.672 380.344 210H387.688C420.938 210 448 237.359 448 271V376C448 450.984 387.812 512 313.844 512H196.156C173.844 512 151.688 506.297 132.062 495.484L71.187 461.906C47 448.594 32 423.016 32 395.156V344.828C32 321.672 42.219 300.078 60.281 285.406L105.844 249.625V61C105.844 27.359 132.906 0 166.156 0S226.469 27.359 226.469 61ZM137.844 338.5C137.844 347.344 130.688 354.5 121.844 354.5S105.844 347.344 105.844 338.5V290.297L80.25 310.391C69.938 318.797 64 331.344 64 344.828V395.156C64 411.359 72.656 426.188 86.625 433.875L147.5 467.453C162.406 475.656 179.219 480 196.156 480H313.844C370.188 480 416 433.344 416 376V271C416 255.016 403.312 242 387.688 242L371.094 242.25C370.958 242.254 370.822 242.256 370.686 242.256C350.046 242.256 357.449 212 328.625 212H313.844C302.852 212 300.242 218.012 292.127 218.012C275.481 218.012 278.627 197 254.781 197H240C223.175 197 222.364 208.69 210.436 208.69C201.777 208.69 194.469 201.583 194.469 192.672V61C194.469 45.016 181.781 32 166.156 32S137.844 45.016 137.844 61V338.5Z" })
  }
));
HandBackPointUpLight.displayName = "HandBackPointUpLight";
var HandBackPointUp_default = HandBackPointUpLight;
