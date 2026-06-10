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
var PersonCarryBox_exports = {};
__export(PersonCarryBox_exports, {
  default: () => PersonCarryBox_default
});
module.exports = __toCommonJS(PersonCarryBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonCarryBoxDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 0C53.5 0 32 21.5 32 47.998C32 74.498 53.5 95.998 80 95.998S128 74.498 128 47.998C128 21.5 106.5 0 80 0ZM352 95.998H224C206.4 95.998 192 110.398 192 127.998V287.994H352C369.6 287.994 384 273.594 384 255.994V127.998C384 110.398 369.6 95.998 352 95.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 479.865C0 497.615 14.25 511.863 32 511.863S64 497.615 64 479.865V405.367C48 391.742 0.625 350.742 0 350.242V479.865ZM118.959 271.078C124.525 281.492 135.373 287.994 147.182 287.994H192V223.996H166.625L133.25 162.246C122.25 141.121 100.5 127.998 76.75 127.998H48C21.49 127.998 0 149.488 0 175.998V278.994C0 297.744 8.25 315.369 22.375 327.617L98.375 392.742L112.5 485.24C113.5 490.865 122.625 515.863 149.25 511.488C166.75 508.613 178.5 492.115 175.625 474.74L161.5 382.242C159 367.367 151.375 353.867 140 344.117L96 306.369V228.119L118.959 271.078Z" })
    ]
  }
));
PersonCarryBoxDuotone.displayName = "PersonCarryBoxDuotone";
var PersonCarryBox_default = PersonCarryBoxDuotone;
