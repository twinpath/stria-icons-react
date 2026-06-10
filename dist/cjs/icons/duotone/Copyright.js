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
var Copyright_exports = {};
__export(Copyright_exports, {
  default: () => Copyright_default
});
module.exports = __toCommonJS(Copyright_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CopyrightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.42 16 16 123.418 16 256C16 388.578 123.42 496 256 496S496 388.578 496 256C496 123.418 388.58 16 256 16ZM212.281 307.375C237.781 334 281.594 334 307.094 307.375C319.312 294.656 339.562 294.156 352.344 306.438C365.094 318.656 365.531 338.906 353.281 351.688C328.375 377.688 295.125 392 259.688 392S191 377.688 166.094 351.688C115.531 298.906 115.531 213.094 166.094 160.312C191 134.312 224.25 120 259.688 120S328.375 134.312 353.281 160.312C365.531 173.094 365.094 193.344 352.344 205.562C339.562 217.75 319.312 217.344 307.094 204.625C281.594 178 237.781 178 212.281 204.625C185.125 232.938 185.125 279.062 212.281 307.375Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216.109 307.375C241.609 334 285.422 334 310.922 307.375C323.141 294.656 343.391 294.156 356.172 306.438C368.922 318.656 369.359 338.906 357.109 351.688C332.203 377.688 298.953 392 263.516 392S194.828 377.688 169.922 351.688C119.359 298.906 119.359 213.094 169.922 160.312C194.828 134.312 228.078 120 263.516 120S332.203 134.312 357.109 160.312C369.359 173.094 368.922 193.344 356.172 205.562C343.391 217.75 323.141 217.344 310.922 204.625C285.422 178 241.609 178 216.109 204.625C188.953 232.938 188.953 279.062 216.109 307.375Z" })
    ]
  }
));
CopyrightDuotone.displayName = "CopyrightDuotone";
var Copyright_default = CopyrightDuotone;
