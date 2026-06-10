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
var Inbox_exports = {};
__export(Inbox_exports, {
  default: () => Inbox_default
});
module.exports = __toCommonJS(Inbox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InboxRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M508.285 304.918L447.031 56.25C443.469 42 430.688 32 416 32H96C81.312 32 68.531 42 64.969 56.25L3.715 304.918C1.248 314.936 0 325.215 0 335.533V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V335.533C512 325.215 510.754 314.936 508.285 304.918ZM108.553 80H403.447L454.684 288H368C358.906 288 350.594 293.125 346.531 301.281L321.156 352H190.844L165.469 301.281C161.406 293.125 153.094 288 144 288H57.318L108.553 80ZM464 416C464 424.822 456.822 432 448 432H64C55.178 432 48 424.822 48 416V336H129.156L154.531 386.719C158.594 394.875 166.906 400 176 400H336C345.094 400 353.406 394.875 357.469 386.719L382.844 336H464V416Z" })
  }
));
InboxRegular.displayName = "InboxRegular";
var Inbox_default = InboxRegular;
