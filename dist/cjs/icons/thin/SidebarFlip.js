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
var SidebarFlip_exports = {};
__export(SidebarFlip_exports, {
  default: () => SidebarFlip_default
});
module.exports = __toCommonJS(SidebarFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SidebarFlipThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 200C360 204.406 363.578 208 368 208H448C452.422 208 456 204.406 456 200S452.422 192 448 192H368C363.578 192 360 195.594 360 200ZM360 264C360 268.406 363.578 272 368 272H448C452.422 272 456 268.406 456 264S452.422 256 448 256H368C363.578 256 360 259.594 360 264ZM448 128H368C363.578 128 360 131.594 360 136S363.578 144 368 144H448C452.422 144 456 140.406 456 136S452.422 128 448 128ZM0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32H64C28.654 32 0 60.654 0 96ZM320 48H448C474.467 48 496 69.533 496 96V416C496 442.467 474.467 464 448 464H320V48ZM16 96C16 69.533 37.533 48 64 48H304V464H64C37.533 464 16 442.467 16 416V96Z" })
  }
));
SidebarFlipThin.displayName = "SidebarFlipThin";
var SidebarFlip_default = SidebarFlipThin;
