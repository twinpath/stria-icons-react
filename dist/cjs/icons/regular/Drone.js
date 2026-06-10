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
var Drone_exports = {};
__export(Drone_exports, {
  default: () => Drone_default
});
module.exports = __toCommonJS(Drone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DroneRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M339.375 92.375C348.625 63.625 376.75 45.25 406.75 48.375C436.75 51.5 460.5 75.25 463.625 105.25S448.375 163.375 419.625 172.625L383.75 222.375C389.125 223.25 394.5 223.875 400 224C461.875 224 512 173.875 512 112S461.875 0 400 0S288 50.125 288 112C288.125 117.5 288.75 122.875 289.625 128.25L339.375 92.375ZM111 368.25C93.625 368.75 79.875 383 80 400.375C80.125 417.75 94.25 431.875 111.625 432S143.25 418.375 143.75 401L211.625 352H300.375L368.25 401C368.75 418.375 383 432.125 400.375 432C417.75 431.875 431.875 417.75 432 400.375C432.125 383 418.375 368.75 401 368.25L352 300.375V211.625L401 143.75C418.375 143.25 432.125 129 432 111.625S417.75 80.125 400.375 80C383 79.875 368.75 93.625 368.25 111L300.375 160H211.625L143.75 111C143.25 93.625 129 79.875 111.625 80S80.125 94.25 80 111.625S93.625 143.25 111 143.75L160 211.625V300.375L111 368.25ZM208 208H304V304H208V208ZM400 288C394.5 288.125 389.125 288.75 383.75 289.625L419.625 339.375C448.375 348.625 466.75 376.75 463.625 406.75S436.75 460.5 406.75 463.625C376.75 466.75 348.625 448.375 339.375 419.625L289.625 383.75C288.75 389.125 288.125 394.5 288 400C288 461.875 338.125 512 400 512S512 461.875 512 400S461.875 288 400 288ZM112 224C117.5 223.875 122.875 223.25 128.25 222.375L92.375 172.625C63.625 163.375 45.25 135.25 48.375 105.25C51.5 75.25 75.25 51.5 105.25 48.375C135.25 45.25 163.375 63.625 172.625 92.375L222.375 128.25C223.25 122.875 223.875 117.5 224 112C224 50.125 173.875 0 112 0S0 50.125 0 112S50.125 224 112 224ZM172.625 419.625C163.375 448.375 135.25 466.75 105.25 463.625C75.25 460.5 51.5 436.75 48.375 406.75C45.25 376.75 63.625 348.625 92.375 339.375L128.25 289.625C122.875 288.75 117.5 288.125 112 288C50.125 288 0 338.125 0 400S50.125 512 112 512S224 461.875 224 400C223.875 394.5 223.25 389.125 222.375 383.75L172.625 419.625Z" })
  }
));
DroneRegular.displayName = "DroneRegular";
var Drone_default = DroneRegular;
