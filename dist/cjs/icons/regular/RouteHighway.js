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
var RouteHighway_exports = {};
__export(RouteHighway_exports, {
  default: () => RouteHighway_default
});
module.exports = __toCommonJS(RouteHighway_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RouteHighwayRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M428.355 269.25C397.859 223.75 416.607 164.75 441.355 113.75C445.355 105.625 444.73 96 439.48 88.625L398.359 30.375C393.734 23.875 386.484 20.125 379.111 20.125C376.361 20.125 373.486 20.625 370.861 21.75C355.488 27.625 338.24 30.625 320.617 30.625C291.119 30.625 260.746 22.125 237.499 4.5C233.499 1.5 228.749 0 223.999 0S214.501 1.5 210.501 4.5C187.253 22.125 156.88 30.625 127.384 30.625C109.761 30.625 92.513 27.625 77.138 21.75C74.513 20.75 71.765 20.25 68.89 20.25C61.515 20.25 54.265 23.875 49.642 30.375L8.521 88.75C3.271 96.125 2.646 105.625 6.646 113.875C31.394 164.75 50.142 223.75 19.644 269.25C-18.352 325.75 1.021 408.625 58.39 435.25L223.999 512L389.609 435.25C446.98 408.625 466.353 325.75 428.355 269.25ZM397.216 355.609C392.492 372.541 382.353 385.699 369.425 391.699L223.999 459.096L78.597 391.711C65.646 385.699 55.509 372.541 50.785 355.609C45.023 334.965 48.273 312.695 59.517 295.975C81.988 262.451 85.871 225.564 81.91 192H366.123C362.167 225.6 366.054 262.514 388.525 296.037C399.728 312.695 402.976 334.965 397.216 355.609Z" })
  }
));
RouteHighwayRegular.displayName = "RouteHighwayRegular";
var RouteHighway_default = RouteHighwayRegular;
