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
const RouteHighwaySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M428.356 269.25C397.859 223.75 416.607 164.75 441.355 113.75C445.354 105.625 444.729 96 439.48 88.625L398.359 30.375C393.234 23.125 382.61 17.25 370.861 21.75C355.488 27.625 338.239 30.625 320.616 30.625C291.119 30.625 260.747 22.125 237.499 4.5C233.499 1.5 228.75 0 224 0S214.501 1.5 210.501 4.5C187.253 22.125 156.881 30.625 127.384 30.625C109.761 30.625 92.512 27.625 77.139 21.75C65.39 17.25 54.641 23.25 49.641 30.375L8.52 88.75C3.271 96.125 2.646 105.625 6.645 113.875C31.393 164.75 50.141 223.75 19.644 269.25C-18.352 325.75 1.021 408.625 58.391 435.25L224 512L389.609 435.25C446.979 408.625 466.352 325.75 428.356 269.25ZM362.612 377.125L224 441.5L85.388 377.125C65.515 368 55.641 330.375 72.764 304.875C97.512 268 102.011 228.125 98.012 192H349.988C345.989 228.125 350.488 268 375.236 304.875C392.484 330.5 382.235 368.125 362.612 377.125Z" })
  }
));
RouteHighwaySolid.displayName = "RouteHighwaySolid";
var RouteHighway_default = RouteHighwaySolid;
