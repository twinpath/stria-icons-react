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
var DeleteRight_exports = {};
__export(DeleteRight_exports, {
  default: () => DeleteRight_default
});
module.exports = __toCommonJS(DeleteRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DeleteRightSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 128V384C0 419.375 28.625 448 64 448H370.75C387.75 448 404 441.25 416 429.25L566.625 278.625C579.125 266.125 579.125 245.875 566.625 233.375L416 82.75C404 70.75 387.75 64 370.75 64H64C28.625 64 0 92.625 0 128ZM190.062 255.998L143.031 208.969C133.656 199.594 133.656 184.406 143.031 175.031S167.594 165.656 176.969 175.031L224 222.062L271.031 175.031C280.406 165.656 295.594 165.656 304.969 175.031S314.344 199.594 304.969 208.969L257.938 255.998L304.969 303.029C314.344 312.404 314.344 327.592 304.969 336.967C295.596 346.34 280.412 346.348 271.031 336.967L224 289.936L176.969 336.967C167.596 346.34 152.412 346.348 143.031 336.967C133.656 327.592 133.656 312.404 143.031 303.029L190.062 255.998Z" })
  }
));
DeleteRightSolid.displayName = "DeleteRightSolid";
var DeleteRight_default = DeleteRightSolid;
