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
var LessThanEqual_exports = {};
__export(LessThanEqual_exports, {
  default: () => LessThanEqual_default
});
module.exports = __toCommonJS(LessThanEqual_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LessThanEqualRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M46.531 222.062L382.531 366.062C385.625 367.375 388.844 368 392 368C401.312 368 410.156 362.562 414.062 353.469C419.281 341.281 413.625 327.156 401.469 321.937L116.938 200L401.469 78.062C413.625 72.844 419.281 58.719 414.063 46.531C408.813 34.344 394.781 28.75 382.531 33.937L46.531 177.937C37.719 181.719 32 190.406 32 200S37.719 218.281 46.531 222.062ZM424 432H24C10.75 432 0 442.75 0 456S10.75 480 24 480H424C437.25 480 448 469.25 448 456S437.25 432 424 432Z" })
  }
));
LessThanEqualRegular.displayName = "LessThanEqualRegular";
var LessThanEqual_default = LessThanEqualRegular;
