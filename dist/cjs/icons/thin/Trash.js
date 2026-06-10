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
var Trash_exports = {};
__export(Trash_exports, {
  default: () => Trash_default
});
module.exports = __toCommonJS(Trash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 64H323.383L302.438 22.125C295.625 8.469 281.938 0 266.656 0H181.344C166.062 0 152.375 8.469 145.562 22.109L124.617 64H8C3.594 64 0 67.578 0 72S3.594 80 8 80H440C444.406 80 448 76.422 448 72S444.406 64 440 64ZM142.508 64L159.875 29.25C163.969 21.078 172.188 16 181.344 16H266.656C275.812 16 284.031 21.078 288.125 29.266L305.492 64H142.508ZM407.027 128C402.787 128 399.28 131.304 399.028 135.537L379.719 460.375C378.469 480.016 361.469 496 341.781 496H106.219C86.531 496 69.531 480.016 68.312 460.406L48.973 135.537C48.721 131.304 45.214 128 40.974 128C36.361 128 32.7 131.885 32.975 136.49L52.344 461.375C54.094 489.297 78.25 512 106.219 512H341.781C369.75 512 393.906 489.297 395.687 461.344L415.025 136.489C415.3 131.884 411.64 128 407.027 128Z" })
  }
));
TrashThin.displayName = "TrashThin";
var Trash_default = TrashThin;
