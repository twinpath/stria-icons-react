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
var CircleDashed_exports = {};
__export(CircleDashed_exports, {
  default: () => CircleDashed_default
});
module.exports = __toCommonJS(CircleDashed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDashedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272.189 16.811V80.811C308.711 84.123 342.049 98.584 368.727 120.836L413.965 75.596C375.506 41.916 326.316 20.404 272.189 16.811ZM75.785 98.223C42.105 136.682 20.594 185.873 17 240H81C84.312 203.475 98.771 170.139 121.023 143.461L75.785 98.223ZM431.379 272C428.066 308.521 413.602 341.855 391.352 368.533L436.594 413.775C470.273 375.316 491.785 326.125 495.379 272H431.379ZM98.414 436.402C136.873 470.082 186.064 491.594 240.189 495.188V431.189C203.668 427.877 170.334 413.412 143.656 391.162L98.414 436.402Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 272C20.594 326.125 42.105 375.316 75.785 413.775L121.027 368.533C98.777 341.855 84.312 308.521 81 272H17ZM143.654 120.836C170.332 98.586 203.668 84.123 240.189 80.811V16.811C186.064 20.404 136.873 41.916 98.414 75.596L143.654 120.836ZM436.594 98.225L391.355 143.463C413.607 170.141 428.066 203.475 431.379 240H495.379C491.785 185.873 470.273 136.684 436.594 98.225ZM272.189 431.189V495.188C326.316 491.594 375.508 470.082 413.967 436.402L368.725 391.162C342.045 413.414 308.711 427.877 272.189 431.189Z" })
    ]
  }
));
CircleDashedDuotone.displayName = "CircleDashedDuotone";
var CircleDashed_default = CircleDashedDuotone;
