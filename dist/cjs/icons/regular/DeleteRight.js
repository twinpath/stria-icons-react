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
const DeleteRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 128V384C0 419.375 28.625 448 64 448H370.75C387.75 448 404 441.25 416 429.25L566.625 278.625C579.125 266.125 579.125 245.875 566.625 233.375L416 82.75C404 70.75 387.75 64 370.75 64H64C28.625 64 0 92.625 0 128ZM48 128C48 119.178 55.178 112 64 112H370.75C375.018 112 379.033 113.666 382.059 116.691L521.367 256L382.059 395.309C379.033 398.334 375.018 400 370.75 400H64C55.178 400 48 392.822 48 384V128ZM143.031 208.969L190.062 255.998L143.031 303.029C133.656 312.404 133.656 327.592 143.031 336.967C152.412 346.348 167.596 346.34 176.969 336.967L224 289.936L271.031 336.967C280.412 346.348 295.596 346.34 304.969 336.967C314.344 327.592 314.344 312.404 304.969 303.029L257.938 255.998L304.969 208.969C314.344 199.594 314.344 184.406 304.969 175.031S280.406 165.656 271.031 175.031L224 222.062L176.969 175.031C167.594 165.656 152.406 165.656 143.031 175.031S133.656 199.594 143.031 208.969Z" })
  }
));
DeleteRightRegular.displayName = "DeleteRightRegular";
var DeleteRight_default = DeleteRightRegular;
