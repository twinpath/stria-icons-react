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
const ListDropdownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.641 32 0 60.641 0 96V416C0 451.359 28.641 480 64 480H448C483.359 480 512 451.359 512 416V96C512 60.641 483.359 32 448 32ZM496 416C496 442.469 474.469 464 448 464H64C37.531 464 16 442.469 16 416V176H496V416ZM496 160H16V96C16 69.531 37.531 48 64 48H448C474.469 48 496 69.531 496 96V160ZM120 288H392C396.422 288 400 284.422 400 280S396.422 272 392 272H120C115.578 272 112 275.578 112 280S115.578 288 120 288ZM120 384H392C396.422 384 400 380.406 400 376S396.422 368 392 368H120C115.578 368 112 371.594 112 376S115.578 384 120 384ZM419 89.75L384 117.75L349 89.75C345.562 87.062 340.516 87.578 337.75 91C335 94.453 335.547 99.484 339 102.25L379 134.25C380.469 135.422 382.234 136 384 136S387.531 135.422 389 134.25L429 102.25C432.453 99.484 433 94.453 430.25 91C427.516 87.562 422.5 87.016 419 89.75Z" })
  }
));
ListDropdownThin.displayName = "ListDropdownThin";
var ListDropdown_default = ListDropdownThin;
