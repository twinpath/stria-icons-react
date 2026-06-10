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
var Windsock_exports = {};
__export(Windsock_exports, {
  default: () => Windsock_default
});
module.exports = __toCommonJS(Windsock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindsockThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 0C3.594 0 0 3.594 0 8V504C0 508.406 3.594 512 8 512S16 508.406 16 504V8C16 3.594 12.406 0 8 0ZM481.188 114.406L97.844 24.219C95.406 23.594 92.969 24.187 91.031 25.719C89.125 27.25 88 29.562 88 32V88H48C43.594 88 40 91.594 40 96S43.594 104 48 104H88V312H48C43.594 312 40 315.594 40 320S43.594 328 48 328H88V384C88 386.438 89.125 388.75 91.031 390.281C92.469 391.406 94.219 392 96 392C96.625 392 97.219 391.938 97.844 391.781L481.188 301.594C499.312 297.312 512 281.312 512 262.656V153.344C512 134.688 499.312 118.688 481.188 114.406ZM216 347.555L104 373.906V42.094L216 68.445V347.555ZM376 309.912L232 343.791V72.209L376 106.088V309.912ZM496 262.656C496 273.844 488.406 283.469 477.5 286.031L392 306.146V109.854L477.5 129.969C488.406 132.531 496 142.156 496 153.344V262.656Z" })
  }
));
WindsockThin.displayName = "WindsockThin";
var Windsock_default = WindsockThin;
