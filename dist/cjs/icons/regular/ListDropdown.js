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
var ListDropdown_exports = {};
__export(ListDropdown_exports, {
  default: () => ListDropdown_default
});
module.exports = __toCommonJS(ListDropdown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListDropdownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 280H384C397.254 280 408 269.254 408 256C408 242.744 397.254 232 384 232H128C114.746 232 104 242.744 104 256C104 269.254 114.746 280 128 280ZM448 32H64C28.625 32 0 60.641 0 96V416C0 451.359 28.625 480 64 480H448C483.375 480 512 451.359 512 416V96C512 60.641 483.312 32 448 32ZM359.988 96H439.998C447.123 96 450.686 104.625 445.623 109.625L405.619 149.631C402.492 152.756 397.492 152.756 394.367 149.631L354.363 109.625C349.674 105 352.176 96 359.988 96ZM464 416C464 424.836 456.836 432 448 432H64C55.164 432 48 424.836 48 416V192H464V416ZM128 376H384C397.254 376 408 365.254 408 352C408 338.744 397.254 328 384 328H128C114.746 328 104 338.744 104 352C104 365.254 114.746 376 128 376Z" })
  }
));
ListDropdownRegular.displayName = "ListDropdownRegular";
var ListDropdown_default = ListDropdownRegular;
