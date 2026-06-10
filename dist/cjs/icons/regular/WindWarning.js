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
var WindWarning_exports = {};
__export(WindWarning_exports, {
  default: () => WindWarning_default
});
module.exports = __toCommonJS(WindWarning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindWarningRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 384C225.674 384 240 369.672 240 352C240 334.326 225.674 320 208 320S176 334.326 176 352C176 369.672 190.326 384 208 384ZM322.969 367.281C292.5 398.719 251.688 416 208 416C119.781 416 48 344.219 48 256S119.781 96 208 96C280.188 96 343.75 144.625 362.5 214.25C365.969 227.062 379.125 234.656 391.938 231.188C404.719 227.719 412.313 214.563 408.875 201.75C384.438 111.219 301.844 48 208 48C93.312 48 0 141.312 0 256S93.312 464 208 464C264.781 464 317.875 441.531 357.406 400.719C366.656 391.187 366.406 376 356.906 366.781S332.219 357.781 322.969 367.281ZM208 288C221.25 288 232 277.25 232 264V152C232 138.75 221.25 128 208 128S184 138.75 184 152V264C184 277.25 194.75 288 208 288ZM472 224H544C596.938 224 640 180.938 640 128S596.938 32 544 32H504C490.75 32 480 42.75 480 56S490.75 80 504 80H544C570.469 80 592 101.531 592 128S570.469 176 544 176H472C458.75 176 448 186.75 448 200S458.75 224 472 224ZM536 272H328C314.75 272 304 282.75 304 296S314.75 320 328 320H536C566.875 320 592 345.125 592 376S566.875 432 536 432H472C458.75 432 448 442.75 448 456S458.75 480 472 480H536C593.344 480 640 433.344 640 376S593.344 272 536 272Z" })
  }
));
WindWarningRegular.displayName = "WindWarningRegular";
var WindWarning_default = WindWarningRegular;
